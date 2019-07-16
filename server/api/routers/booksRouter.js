const { getBooks, findBookReviews } = require('../helpers');
const router = require('express').Router();
const db = require('../../data/dbConfig.js');

router.get('/', async (req, res) => {
	try {
		const books = await getBooks();
		if (books) {
			// let newBooks = books.map((book) => {
			// 	// console.log(book);
			// 	const bookReviews = findBookReviews(book.id);
			// 	console.log(bookReviews);
			// 	if (bookReviews) {
			// 		return {
			// 			...book,
			// 			reviews: bookReviews
			// 		};
			// 	} else {
			// 		return book;
			// 	}
			// });
			res.status(200).json(books);
			console.log(books);
		} else {
			res.status(404).json({ message: 'Books could not be found' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const reviews = await db('books')
			.innerJoin('reviews', 'reviews.book_id', 'books.id')
			.select('reviews.*')
			.where('books.id', req.params.id);
		const book = await db('books').where({ id: req.params.id });
		if (book.length !== 0) {
			res.status(200).json({
				...book,
				reviews: reviews
			});
		} else {
			res.status(404).json({ message: 'Invalid ID' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;
