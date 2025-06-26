const express = require("express");
const router = express.Router();


router.get("/" , (req , res)=>{
    res.send(`
    <h1>Welcome to Book API</h1>
    <p>Created by me @Daksh Chuahan</p>
    <p>View all books here: <a href="/books">Go to Books</a></p>
    
    <hr>
    <h1>form for search book</h1>
    <form action="/books/" method="get">
        <input  placeholder="search book" type="input" name="title" id="title">
        <button type="submit"></button>
    </form>
    `);
});

module.exports = router;