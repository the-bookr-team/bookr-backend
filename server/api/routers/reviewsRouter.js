const router = require('express').Router();

const { getReviews, findBookReviews, getReviewsBy, addReview } = require('../helpers');

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

module.exports = router;
