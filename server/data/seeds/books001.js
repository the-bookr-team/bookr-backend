exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('books').del().then(function() {
		// Inserts seed entries
		return knex('books').insert([
			{ id: 1, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 2, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 3, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 4, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 5, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 6, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 7, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 8, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 9, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' },
			{ id: 10, book_img: 'rowValue1', title: '', author: '', name: '', publisher: '' }
		]);
	});
};
