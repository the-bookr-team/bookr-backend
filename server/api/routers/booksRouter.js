const { getBooks, findBookReviews } = require('../helpers');
const router = require('express').Router();
const db = require('../../data/dbConfig.js');

import request from 'request-promise';
import { parseString } from 'xml2js';

router.get('/', async (req, res) => {
	try {
		const books = await getBooks();
		if (books) {
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

// goodreads search
router.get('/search', (req, res) => {
	request
		.get(`https://www.goodreads.com/search/index.xml?key=QWRcP15MmSKQuoMRbViLg&q=${req.query.q}`)
		.then((result) =>
			parseString(result, (err, goodReadsResult) =>
				res.json({
					books: goodReadsResult.GoodreadsResponse.search[0].result[0].work.map((work) => ({
						goodreadsId: work.best_book[0].id[0]._,
						title: work.best_book[0].title[0],
						author: work.best_book[0].author[0].name[0],
						book_img: [ work.best_book[0].image_url[0] ]
					}))
				})
			)
		);
});

module.exports = router;
