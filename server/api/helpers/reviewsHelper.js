const db = require('../../data/dbConfig.js');

const getReviews = () => {
	return db('reviews');
};

const getReviewById = (id) => {
	return db('reviews').where({ id }).first();
};

const findBookReviews = (bookId) => {
	return db('reviews as r')
		.join('books as b', 'r.book_id', 'b.id')
		.select('r.id', 'b.title', 'r.review', 'r.reviewer', 'b.id as bookId', 'r.rating')
		.where({ book_Id: bookId });
};

async function addReview(review) {
	const [ id ] = await db('reviews').insert(review);
	return getReviewById(id);
}

module.exports = {
	getReviews,
	getReviewById,
	addReview,
	findBookReviews
};
