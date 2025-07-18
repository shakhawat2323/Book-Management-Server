"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_control_1 = require("./book.control");
const BooksRouter = (0, express_1.Router)();
BooksRouter.post("/", book_control_1.CreateData);
BooksRouter.get("/", book_control_1.getBooksData);
BooksRouter.get("/:bookId", book_control_1.GetbookByIdteData);
BooksRouter.patch("/:bookId", book_control_1.GetbookUpdateData);
BooksRouter.delete("/:bookId", book_control_1.DeleteData);
exports.default = BooksRouter;
