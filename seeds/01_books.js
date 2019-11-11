exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('books').insert([
        {
          author: 'Jordan Peterson',
          bookSummary:
            'In-depth look at human consciousness through the lense of the Yin/Yang dichotomy',
          nonFiction: true,
          genre: 'Psychology/Self Improvement',
          haveRead: false,
          imageLink:
            'https://dynamic.indigoimages.ca/books/0345816021.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=14&lang=fr',
          language: 'English',
          link: 'https://www.jordanbpeterson.com/12-rules-for-life/',
          pages: 315,
          recommendable: true,
          subtitle: 'Antidote to Chaos',
          title: '12 Rules For Life',
          year: 2017,
        },
        {
          author: 'Kahlil Gibran',
          bookSummary: 'A poetic recount of a wiseman`s last sermon',
          nonFiction: false,
          genre: 'prose poetry',
          haveRead: true,
          imageLink:
            'https://images-na.ssl-images-amazon.com/images/I/91iIlD9xegL.jpg',
          language: 'English',
          link: 'http://www.katsandogz.com/gibran.html',
          pages: 95,
          recommendable: true,
          subtitle: '',
          title: 'The Prophet',
          year: 2017,
        },
        {
          author: 'George Berkowski',
          bookSummary: 'A how-to for building a billon dollar app',
          nonFiction: true,
          genre: 'How-to tech',
          haveRead: false,
          imageLink:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437319919l/23252049._SY475_.jpg',
          language: 'English',
          link:
            'https://mybilliondollarapp.com/how-to-build-a-billion-dollar-app-book/',
          pages: 315,
          recommendable: true,
          subtitle: '',
          title: 'How To Build A Billon Dollar App',
          year: 2015,
        },
        {
          author: 'Yuval Noah Harari',
          bookSummary:
            'What we ought to know about the 21st century and what lies ahead',
          nonFiction: true,
          genre: 'Anthropology and sociology',
          haveRead: false,
          imageLink:
            'https://images-na.ssl-images-amazon.com/images/I/718K91oepAL.jpg',
          language: 'English',
          link: 'https://www.ynharari.com/book/21-lessons/',
          pages: 315,
          recommendable: true,
          subtitle: '',
          title: '21 Lessons for the 21st Century',
          year: 2017,
        },
        {
          author: 'Walter Isaacson',
          bookSummary: 'Biography about Benjamin Franklin',
          nonFiction: true,
          genre: 'biography',
          haveRead: false,
          imageLink:
            'https://images-na.ssl-images-amazon.com/images/I/51hDloDd9vL._SX319_BO1,204,203,200_.jpg',
          language: 'English',
          link:
            'https://www.google.com/books/edition/Benjamin_Franklin/L64OOJGaCKIC?hl=en&gbpv=1&printsec=frontcover',
          pages: 315,
          recommendable: true,
          subtitle: 'An America Life',
          title: 'Benjamin Franklin',
          year: 2017,
        },
        {
          author: 'Tim Ferris',
          bookSummary: 'Lifestyle Design',
          nonFiction: true,
          genre: 'how-to',
          haveRead: false,
          imageLink:
            'https://images-na.ssl-images-amazon.com/images/I/81qW97ndkvL.jpg',
          language: 'English',
          link: 'https://fourhourworkweek.com/',
          pages: 315,
          recommendable: true,
          subtitle: 'How to escape the 9 - 5 and live the life you want',
          title: '4 Hour Work Week',
          year: 2017,
        },
      ])
    })
}
