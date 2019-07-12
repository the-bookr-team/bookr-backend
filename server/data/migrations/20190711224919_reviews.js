exports.up = function(knex, Promise) {
	return knex.schema.createTable('reviews', (tbl) => {
		tbl.increments();
		tbl.string('reviewer', 128).references('username').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
		tbl.string('review', 128);
		tbl.integer('rating', 5);
		tbl.integer('reviewer_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
		tbl.integer('book_id').references('id').inTable('books').onDelete('CASCADE').onUpdate('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('reviews');
};
