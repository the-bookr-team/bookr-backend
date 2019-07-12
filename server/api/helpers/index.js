const books = require('./booksHelper.js');
const users = require('./usersHelper.js');
const reviews = require('./reviewsHelper.js');

module.exports = {
	...books,
	...users,
	...reviews
};
