
// Assuming this as a working Database.
// let books = [
//     { id: 1, 
//         title: "The Alchemist", 
//         author: "Paulo Coelho" 
//     },
//     { id: 2, 
//         title: "Atomic Habits", 
//         author: "James Clear" 
//     }
// ];

// requiring book dbModel
const bookModel = require("../models/booksModel")


exports.getBooks = async (req ,res, next)=>{
    try{
        if(req.query.title){
            const Books = await bookModel.findOne({title : req.query.title})
            if(!Books) {
                throw new Error("This perticular book noy found");
            }
            return res.json(Books);
        }
        const Books = await bookModel.find()
        res.json(Books);
    } catch (err) {
        next(err)
    }
};

exports.createBook = async (req, res)=>{
    const book = await bookModel.create({
        title: req.body.title,
        author: req.body.author
    });
    res.json(book);
}

exports.getBook = async (req , res , next)=>{
    try {
        console.log(req.params.title);
        const book =await bookModel.findOne({
            title: req.params.title
        });
        if(!book){
            throw new Error ("Book not found");
        }
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req , res , next)=>{
    try{
        const book = await bookModel.findOne({
            title: req.params.search
        });
        if(!book){
            throw new Error("Book Not Found For update")
        }
        book.author = req.body.author;
        book.title = req.body.title;
        await book.save();
        res.json(book);
    } catch (err) { 
        next(err);
    }
};

exports.deleteBook = async (req, res)=>{
    await bookModel.deleteOne({
        title: req.params.title
    });
    res.status(204).send();
}

// exports.getBooks = (req ,res)=>{
//     res.json(books);
// };

// exports.createBook = (req , res)=>{
//     const newBook = { id: books[books.length-1].id+1 ,title: req.body.title , author: req.body.author };
//     console.log(req.body)
//     // const newBook = { id: books[books.length-1].id+1 , ...req.body };
//     books.push(newBook);
//     res.status(201).json(newBook);
// };

// exports.getBook = (req , res , next)=>{
//     try {
//         console.log(req.params.id);
//         const book = books.find(b => b.id == req.params.id);
//         //if(!book) return res.status(404).send('Book not found');

//         if(!book){
//             throw new Error ("Book not found");
//         }
//         res.json(book);
//     } catch (err) {
//         next(err);
//     }
// };

// exports.updateBook = (req , res , next)=>{
//     try{
//         const book = books.find(b => b.id == req.params.id);
//         // if(!book){  return res.status(404).send("Book not found");    }
//         if(!book){
//             throw new Error("Book Not Found For update")
//         }
//         book.author = req.body.author;
//         book.title = req.body.title;
//         res.json(book);
//     } catch (err) { 
//         next(err);
//     }
// };

// exports.deleteBook = (req, res)=>{
//     books = books.filter(b => b.id != req.params.id);
//     res.status(204).send();
// }