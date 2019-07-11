exports.up = function(knex, Promise) {
	return knex.schema.createTable('books', (tbl) => {
		tbl.increment().notNullable();
		tbl.string('book_img');
		tbl.string('title', 128).notNullable();
		tbl.string('author', 128).notNullable();
		tbl.string('name', 128).notNullable();
		tbl.string('publisher', 128).notNullable();
		// tbl.array('reviews');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('books');
};
