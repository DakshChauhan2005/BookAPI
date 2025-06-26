const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bookController = require("../controllers/bookController");
const {validateBookResult , validateCreateBook ,validateBookUpdate } = require("../validation/bookValidation")

router.get("/" , bookController.getBooks);
router.post("/" , validateCreateBook  , validateBookResult, bookController.createBook);
router.get("/:title" , bookController.getBook);
router.put("/:search" , validateBookUpdate , validateBookResult , bookController.updateBook);
router.delete("/:title", bookController.deleteBook);


module.exports = router;