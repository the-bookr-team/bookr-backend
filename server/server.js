const express = require('express');
const server = express();
const { booksRouter } = require('./api/routers');

server.use(express.json());

// server routes
server.use('/api/books', booksRouter);

server.get('/', (req, res) => {
	res.status(200).json('Welcome to the Bookr API!');
});

module.exports = server;
