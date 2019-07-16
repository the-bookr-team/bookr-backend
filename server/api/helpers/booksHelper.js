const db = require('../../data/dbConfig.js');
const { findBookReviews, mappers } = require('../helpers');

// const getBooks = () => {
// 	console.log('starting....');
// 	const books = db('books as b');
// 	console.log(books);
// 	let newBooks;
// 	if (books) {
// 		console.log('sfter if statement', books);
// 		newBooks = books.map((book) => {
// 			console.log('books:', book);
// 			const bookReviews = findBookReviews(book.id);
// 			console.log(bookReviews);
// 			if (bookReviews) {
// 				return {
// 					...book,
// 					reviews: bookReviews
// 				};
// 			} else {
// 				return book;
// 			}
// 		});
// 	}
// 	console.log('newbooks', newBooks);
// 	return newBooks;
// };

async function getBookById(id) {
	await db('books').where({ id }).first();
}

const getBooks = () => {
	let books = db('books as b').map((item) => {
		let query = db('books as b2');

		if (item.id) {
			query.where('b2.id', item.id).first();

			const promises = [ query, getBookReviews(item.id) ]; // [ projects, actions ]

			return Promise.all(promises).then(function(results) {
				let [ book, reviews = reviews ] = results;

				if (book) {
					book.reviews = reviews;

					return book;
				}
			});
		}
		console.log(query);
		console.log('books:', book);
	});
	if (books) return books;
};

function getBookReviews(bookId) {
	return db('reviews').where('book_id', bookId);
}

async function getReviewsByBookId(id) {
	const reviews = await db('books');
}

module.exports = {
	getBooks,
	getBookReviews,
	getBookById
};
