const db = require('../../data/dbConfig.js');

const getBooks = () => {
	let books = db('books as b').map((item) => {
		let query = db('reviews as r');

		if (item.id) {
			query.where('r.book_id', item.id).first();

			const promises = [query, getBookReviews(item.id)];

			return Promise.all(promises).then(function (results) {
				let [book, reviews] = results;

				if (book) {
					book.reviews = reviews;
					return book;
				}
			});
		}
	});
	if (books) return books;
};

// function getBooks() {
// 	let books = db('books as b').map(item => {
// 		if (item.id) {
// 			books.where('b.id', item.id).first();
// 			const promises = [book, getBookReviews(item.id)]

// 			return Promise.all(promises).then(function (results) {
// 				let [book, reviews = reviews] = results;

// 				if (book) {
// 					book.reviews = reviews;
// 					return book
// 				}
// 			})
// 		}
// 	})
// 	if (books) return books
// }

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
