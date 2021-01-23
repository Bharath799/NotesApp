const Note = require("../models/note"); //importing Note model & perform all your request listner

module.exports.list = (req, res) => {
  Note.find({ user: req.user._id })
    .populate("category", ["_id", "name"])
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Note.findOne({ _id: id })
    .populate("category", ["_id", "name"])
    .then(note => {
      if (note) {
        res.json(note);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  console.log(body);
  const note = new Note(body); //passing object into constructor
  console.log(note);
  note.user = req.user._id;
  note
    .save()
    .then(note => {
      res.json(note);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Note.findByIdAndUpdate({ _id: id, user: req.user_id }, body, {
    new: true,
    runValidators: true
  })
    .then(note => {
      if (note) {
        res.json(note);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Note.findByIdAndDelete({ _id: id, user: req.user._id })
    .then(note => {
      if (note) {
        res.json(note);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
