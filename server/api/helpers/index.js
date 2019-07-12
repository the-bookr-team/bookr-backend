const books = require('./booksHelper.js');
const users = require('./usersHelper.js');

module.exports = {
	...books,
	...users
};
