const {body , validationResult , param} = require("express-validator");

exports.validateCreateBook = [
    body("title")
        .notEmpty().withMessage("Title is required")
        .isString().withMessage("Title must be a String")
        .trim()
        .escape() ,
    body("author")
        .notEmpty().withMessage("author is required")
        .isString().withMessage("author must be a String")
        .trim()
        .escape() ,
];

exports.validateBookUpdate = [
    body("title")
        .notEmpty().withMessage("Title is required to update")
        .isString().withMessage("Title must be a String")
        .trim()
        .escape() ,
    body("author")
        .notEmpty().withMessage("author is required")
        .isString().withMessage("author must be a String")
        .trim()
        .escape() ,
];

exports.validateBookResult = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return 400 Bad Request with error details
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Go to controller only if valid
};