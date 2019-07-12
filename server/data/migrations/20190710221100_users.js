exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.string('username', 128).unique();
		tbl.string('password', 128);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('users');
};
