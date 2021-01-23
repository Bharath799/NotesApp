const Category = require("../models/category"); // importing the category nodel & perform all your request listner

module.exports.list = (req, res) => {
  Category.find()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const category = new Category(body);
  category.user = req.user._id;
  category
    .save()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.update = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Category.findByIdAndUpdate({ _id: id, user: req.user_id }, body)
    .then(category => {
      if (category) {
        res.json(category);
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
  Category.findByIdAndDelete({ _id: id, user: req.user._id })
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Category.findOne({ _id: id })
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};
