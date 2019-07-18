const books = require('./booksHelper.js');
const users = require('./usersHelper.js');
const reviews = require('./reviewsHelper.js');

// exports all the helpers

module.exports = {
	...books,
	...users,
	...reviews
};
