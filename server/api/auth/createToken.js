const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
	generateToken
};

// creates a JSON Web Token token

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username
	};

	const options = {
		expiresIn: '1d'
	};

	return jwt.sign(payload, process.env.SECRET, options);
}
