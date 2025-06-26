const express = require("express");
const app = express();
const port  = 3000;
const bookRoutes = require("./routes/bookRoutes");
const homeRoute = require("./routes/homeRoute");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

connectDB();

// using middlewares to manage data flow (ex- converting data to get on req.body)
app.use(express.json());
app.use(express.urlencoded({extend: true}));

// Modular Routess
app.use("/" , homeRoute)
app.use("/books" , bookRoutes);
// app.use("/API/auth" , authRoutes);

// Unexpected route error Handelling
app.use((req ,res,next)=>{
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});


// Centralised Error Handeling Middleware
// it catches all the erroor and display properly without breaking server sequence
// if any controller calls next(err), This middleware catches it 
app.use((err , req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({
        success : false,
        message: err.message || 'Internal server issue'
    });
});

// Listening at this port , Running on localhost (Own machine)
app.listen(port, ()=>{
    console.log(`port is listening at http://localhost:${port}`);
});

// Some Important Codes And Their Meanings

// | Code | Meaning               | When to Use                   |
// | ---- | --------------------- | ----------------------------- |
// | 200  | OK                    | Successful GET/PUT            |
// | 201  | Created               | POST created a resource       |
// | 400  | Bad Request           | Missing or invalid data       |
// | 401  | Unauthorized          | Auth required                 |
// | 403  | Forbidden             | Authenticated but not allowed |
// | 404  | Not Found             | Resource not found            |
// | 500  | Internal Server Error | Unexpected crash or failure   |
