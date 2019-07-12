const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: "You don't have permisssion" });
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		});
	} else {
		res.status(401).json({ message: "You don't have permisssion" });
	}
};
