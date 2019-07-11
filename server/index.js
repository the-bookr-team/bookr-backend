const server = require('./server.js');

const port = 3000 || process.env.PORT;

server.listen(port, () => {
	console.log(`Server is currently listening on port: ${port}`);
});
