
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let BookSchema = new Schema({
    bookName: String,
    authorName: String,
    isbn: String,
    price: Number
});

module.exports = mongoose.model('Book', BookSchema);