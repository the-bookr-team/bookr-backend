const db = require('../../data/dbConfig.js');

const getReviews = () => {
	return db('reviews').select('review', 'reviewer', 'rating');
};

const getReviewById = (id) => {
	return db('reviews').where({ id }).first();
};

const getBookReviews = (bookId) => {
	return db('reviews as r')
		.join('books as b', 'r.book_id', 'b.id')
		.select('r.id', 'r.review', 'r.reviewer', 'b.id as bookId', 'r.rating')
		.where({ book_id: bookId });
};

async function addReview(review) {
	const [ id ] = await db('reviews as r').join('users as u', 'r.reviewer_id', 'users.username').insert(review);
	return getReviewById(id);
}

function updateReview(id, changes) {
	return db('reviews').where({ id }).update(changes, '*');
}

function deleteReview(id) {
	return db('reviews').where({ id }).del();
}

module.exports = {
	getReviews,
	getReviewById,
	addReview,
	getBookReviews,
	updateReview,
	deleteReview
};
