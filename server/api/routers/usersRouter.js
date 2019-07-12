const { getUsers, addUser } = require('../helpers');
const router = require('express').Router();

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
		const newUser = await addUser(req.body);
		if (newUser) {
			res.status(201).json(newUser);
		} else {
			res.status(404).json('Invalid Fields');
		}
	} catch (err) {
		res.status(500).json({ message: err });
	}
});

router.post('/login', async (req, res) => {});

module.exports = router;
