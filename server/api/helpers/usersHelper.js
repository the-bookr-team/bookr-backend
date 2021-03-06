const db = require('../../data/dbConfig.js');

const getUsers = () => {
	return db('users');
};

const getUserById = (id) => {
	return db('users').where({ id }).first();
};

const getUsersBy = (filter) => {
	return db('users').where(filter);
};

async function addUser(user) {
	const [ id ] = await db('users').insert(user);
	return getUserById(id);
}

module.exports = {
	getUsers,
	getUserById,
	getUsersBy,
	addUser
};
