exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del().then(function() {
		// Inserts seed entries
		return knex('users').insert([
			{ id: 1, username: 'Justin', password: 'password' },
			{ id: 2, username: 'Dan', password: 'password' },
			{ id: 3, username: 'Cedric', password: 'password' },
			{ id: 4, username: 'Cesare', password: 'password' }
		]);
	});
};
