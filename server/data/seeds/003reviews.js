exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('reviews').del().then(function() {
		// Inserts seed entries
		return knex('reviews').insert([
			{
				id: 1,
				reviewer: 'Justin',
				review: 'An amazing read for anyone who roots for the underdog!',
				rating: 5,
				reviewer_id: 1,
				book_id: 1
			},
			{
				id: 2,
				reviewer: 'Dan',
				review: 'Awesome book, definitely worth reading again.',
				rating: 5,
				reviewer_id: 2,
				book_id: 1
			},
			{
				id: 3,
				reviewer: 'Cedric',
				review: "The context was decent but the title just didn't peak my interest... ",
				rating: 2,
				reviewer_id: 3,
				book_id: 1
			},
			{
				id: 4,
				reviewer: 'Cesare',
				review:
					"I couldn't sleep because the story was so intense, it's the type of book that continues to draw you in!  Definitely would recommend for anyone!",
				rating: 5,
				reviewer_id: 4,
				book_id: 1
			},
			{
				id: 5,
				reviewer: 'Justin',
				review: 'An amazing read for anyone who roots for the underdog!',
				rating: 5,
				reviewer_id: 1,
				book_id: 2
			}
		]);
	});
};
