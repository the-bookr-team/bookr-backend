const { getBooks, getBook } = require('../helpers');
const router = require('express').Router();

router.get('/', async (req, res) => {
	try {
		const books = await getBooks();
		if (books) {
			res.status(200).json(books);
		} else {
			res.status(404).json({ message: 'Books could not be found' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

module.exports = router;
