const db = require('../../data/dbConfig.js');

function getBooks() {
	return db('books as b').join('reviews as r', 'b.id', 'r.book_id')
}

async function getBookById(id) {
	await db('books').where({ id }).first();
}

function getBookReviews(bookId) {
	return db('reviews').where('book_id', bookId);
}

module.exports = {
	getBooks,
	getBookReviews,
	getBookById
};
