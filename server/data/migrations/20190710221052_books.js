exports.up = function(knex, Promise) {
	return knex.schema.createTable('books', (tbl) => {
		// returns a list of book objects = {
		//     id: Number
		//     book_img: '',
		//     title: '',
		//     author: '',
		//     author: '',
		//     name: '',
		//     publisher: '',
		//     reviews: [ references the reviews from the reviews table ]
		// }

		tbl.increments().notNullable();
		tbl.string('book_img');
		tbl.string('title', 128).notNullable();
		tbl.string('author', 128).notNullable();
		tbl.string('publisher', 128).notNullable();
		// tbl.array('reviews');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('books');
};
