
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    bookName: String,
    author: String,
    isbn: String,
    price: Number
});

module.exports = mongoose.model('Book', BookSchema);