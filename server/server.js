const express = require('express');

const server = express();
const { booksRouter, usersRouter, reviewsRouter } = require('./api/routers');
const configuredMiddleware = require('./api/middleware.js');

configuredMiddleware(server);
server.use(express.json());

// server routes
server.use('/api/books', booksRouter);
server.use('/api/users', usersRouter);
server.use('/api/reviews', reviewsRouter);

server.get('/', (req, res) => {
	res.status(200).json('Welcome to the Bookr API!');
});

module.exports = server;
