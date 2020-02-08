exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          id: 1,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/615f6CAjYSL.jpg",
          title: "Pinocchio (Sterling Unabridged Classics)",
          author: "Carlo Collodi",
          publisher: "Sterling Children's Books"
        },
        {
          id: 2,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/51DCK3z12-L._SX304_BO1,204,203,200_.jpg",
          title: "A Game of Thrones (A Song of Ice and Fire, Book 1)",
          author: "George R. R. Martin",
          publisher: "Bantam"
        },
        {
          id: 3,
          book_img:
            "https://m.media-amazon.com/images/I/81v5wp2zeQL._AC_UL436_.jpg",
          title: "All the Light We Cannot See: A Novel",
          author: "Anthony Doerr",
          publisher: "Scribner"
        },
        {
          id: 4,
          book_img:
            "https://m.media-amazon.com/images/I/517NNEemClL._AC_UL436_.jpg",
          title: "Beneath a Scarlet Sky: A Novel",
          author: "Mark Sullivan",
          publisher: "Lake Union Publishing"
        },
        {
          id: 5,
          book_img:
            "https://m.media-amazon.com/images/I/913q3yNsbaL._AC_UL436_.jpg",
          title: "The Girl on the Train",
          author: "Paula Hawkins",
          publisher: "Riverhead Books"
        },
        {
          id: 6,
          book_img:
            "https://m.media-amazon.com/images/I/81WWiiLgEyL._AC_UL436_.jpg",
          title: "Where the Crawdads Sing",
          author: "Delia Owens",
          publisher: "G.P. Putnam's Sons"
        },
        {
          id: 7,
          book_img:
            "https://m.media-amazon.com/images/I/71124+8SsFL._AC_UL436_.jpg",
          title:
            "Ghost Soldiers: The Epic Account of World War II's Greatest Rescue Mission",
          author: "Hampton Sides",
          publisher: "Anchor"
        },
        {
          id: 8,
          book_img:
            "https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UL436_.jpg",
          title: "Educated: A Memoir",
          author: "Tara Westover",
          publisher: "Random House"
        },
        {
          id: 9,
          book_img:
            "https://m.media-amazon.com/images/I/81wrqVLMYqL._AC_UL436_.jpg",
          title: "Spilled Milk: Based On A True Story",
          author: "K.L Randis",
          publisher: "K.L Randis"
        },
        {
          id: 11,
          book_img:
            "https://m.media-amazon.com/images/I/91OzUswpEzL._AC_UY218_ML3_.jpg",
          title: "The Guardians",
          author: "Johm Grisham",
          publisher: "Doubleday"
        },
        {
          id: 12,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/51hsgkhTHML.jpg",
          title:
            "The Bones She Buried: A completely gripping, heart-stopping crime thriller (Detective Josie Quinn Book 5)",
          author: "Lisa Regan",
          publisher: "Bookouture"
        },
        {
          id: 13,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/41DPq03IAOL.jpg",
          title: "When We Believed in Mermaids: A Novel",
          author: "Barbara O'Neal",
          publisher: "Lake Union Publishing"
        },
        {
          id: 14,
          book_img: "https://m.media-amazon.com/images/I/51YXQdzfukL.jpg",
          title: "With the Fire on High ",
          author: "Elizabeth Acevedo",
          publisher: "Quill Tree Books"
        },
        {
          id: 15,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/41GU9ufax6L.jpg",
          title: "In the Heart of the Fire",
          author: "Dean Koontz",
          publisher: "Amazon Original Stories"
        },
        {
          id: 16,
          book_img: "https://m.media-amazon.com/images/I/41plY9+1OrL.jpg",
          title:
            "Talking to Strangers: What We Should Know About the People We Don't Know",
          author: "Malcolm Gladwell",
          publisher: "Hachette Audio"
        },
        {
          id: 17,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/5160VyClkEL.jpg",
          title: "Station Eleven: A novel",
          author: "Emily St. John Mandel",
          publisher: "Vintage"
        },
        {
          id: 18,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/410K-S--pmL.jpg",
          title:
            "If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood",
          author: "Gregg Olsen",
          publisher: "Thomas & Mercer"
        },
        {
          id: 19,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/51Pticdj-iL.jpg",
          title: "Golden in Death: An Eve Dallas Novel",
          author: "J. D. Robb",
          publisher: "St. Martin's Press"
        },
        {
          id: 20,
          book_img:
            "https://images-na.ssl-images-amazon.com/images/I/41ddFG035pL._SX366_BO1,204,203,200_.jpg",
          title: "ESPN Kobe Bryant",
          author: "The Editors of ESPN",
          publisher: "ESPN"
        }
      ]);
    });
};
