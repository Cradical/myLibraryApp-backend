exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", book => {
    book.increments("id");
    book.string("author");
    book.text("bookSummary");
    book.boolean("nonFiction");
    book.string("genre");
    book.boolean("haveRead");
    book.string("imageLink");
    book.string("language");
    book.string("link");
    book.integer("pages");
    book.boolean("recommendable");
    book.string("subtitle");
    book.string("title");
    book.integer("year");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("books");
};
