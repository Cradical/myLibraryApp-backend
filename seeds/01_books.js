exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("books")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {
          author: "Jordan Peterson",
          bookSummary:
            "In-depth look at human consciousness through the lense of the Yin/Yang dichotomy",
          nonFiction: true,
          genre: "Psychology/Self Improvement",
          haveRead: false,
          imageLink:
            "https://dynamic.indigoimages.ca/books/0345816021.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=14&lang=fr",
          language: "English",
          link: "https://www.jordanbpeterson.com/12-rules-for-life/",
          pages: 315,
          recommendable: true,
          subtitle: "Antidote to Chaos",
          title: "12 Rules For Life",
          year: 2017
        }
      ]);
    });
};
