const db = require("../models/book");
const axios = require("axios")

// Defining methods for the booksController
module.exports = {

  searchAPI: (req,res) => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=harrypotter")
    .then((response) => res.json(response.data))
    .catch((err) => res.status(422).json(err))
  },

  //finds all books saved in db
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //finds book by id
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //save or create new book to db
  save: function(req, res) {
    db.Book
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //updating the db
  update: function(req, res) {
    db.Book
      .findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //deleting book from db
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};