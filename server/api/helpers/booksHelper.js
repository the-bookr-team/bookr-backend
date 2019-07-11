const db = require('../../data/dbConfig.js');

const getBooks = () => {
	return db('books');
};

module.exports = {
	getBooks
};
