const router = require('express').Router();
const bcrypt = require('bcryptjs');

const createToken = require('../auth/createToken.js');
const { getUsers, getUserById, getUsersBy, addUser } = require('../helpers');

router.get('/', async (req, res) => {
	try {
		const users = await getUsers();
		if (users) {
			res.status(200).json(users);
		} else {
			res.status(404).json({ message: 'Users not found' });
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post('/register', async (req, res) => {
	try {
		let user = req.body;
		const hash = bcrypt.hashSync(user.password, 10);
		user.password = hash;
		const newUser = await addUser(user);
		if (newUser) {
			res.status(201).json(newUser);
		} else {
			res.status(404).json('Invalid Fields');
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	getUsersBy({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = createToken.generateToken(user);
				res.status(200).json({
					message: `Welcome ${user.username}`,
					token,
					roles: token.roles
				});
			} else {
				res.status(404).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
