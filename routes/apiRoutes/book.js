const express = require('express');
const router = express.Router();
const Book = require('../../models/book')



    router.get('/books', function (req, res) {
        Book.find({})
          .then((books) => {
            console.log(books);
            res.send(books);
          });
      });


//     .post(bookController.save)

// router.route("/books/:id")
//     .get(bookController.findById)
//     .put(bookController.update)
//     .delete(bookController.remove)

module.exports = router;