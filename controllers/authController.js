const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "   ";

exports.registerUser = async (req ,res) => {
    const {name , email , password} = req.body;

    try{
        const userExist = await userModel.findOne({    email   })
        if( userExist ) {
            return res.status(400).json({
                message: "User already Exist"
            });
        }

        const hasedPassword =await bcrypt.hash(password , 10);

        const newUser = await userModel.create({
            name,
            email,
            password: hasedPassword
        });
        res.status(201).json({message: "user registered succesfully" , newUser});
    } catch (err) {
        res.status(500).json({error : err.msg});
    }
}

exports.loginUser = async (req , res) => {
    const {email , password} = req.body;
    try {
        const user = await userModel.findOne({ email });
        if(!user){
            return res.status(400).json({message: "Invalid credential"});
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            res.status(400).json({message: "Invalid credential"});
        }
        
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user: { name: user.name, email: user.email } });
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err.message})
    }
}