const router = require('express').Router();
const authorization = require('../auth/restrictedMiddleware');

const { getReviews, findBookReviews, getReviewsBy, addReview, updateReview, deleteReview } = require('../helpers');

router.get('/', async (req, res) => {
	try {
		const reviews = await getReviews();
		if (reviews) {
			res.status(200).json(reviews);
		} else {
			res.status(404).json({ message: 'Reviews not found' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.get('/books/:id', async (req, res) => {
	try {
		const bookReviews = await findBookReviews(req.params.id);
		if (bookReviews) {
			res.status(200).json(bookReviews);
		} else {
			res.status(404).json({ message: 'Reviews not found' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post('/books/:id', authorization, (req, res) => {
	let review = req.body;
	addReview(review)
		.then((review) => {
			if (review.review && review.rating <= 5 && review.book_id) {
				res.status(201).json(review);
			} else {
				res.status(404).json({ message: 'Invalid Format' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.put('/books/:id', authorization, (req, res) => {
	let review = req.body;
	updateReview(req.params.id, review)
		.then((review) => {
			if (review && req.params.id) {
				res.status(201).json(review);
			} else {
				res.status(404).json({ message: 'Invalid Format' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.delete('/books/:id', async (req, res) => {
	try {
		const count = await deleteReview(req.params.id);
		if (count > 0) {
			res.status(200).json({ message: 'The review has been deleted.' });
		} else {
			res.status(404).json({ message: 'The review could not be found.' });
		}
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err });
	}
});

module.exports = router;
