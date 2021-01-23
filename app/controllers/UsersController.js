const { User } = require("../models/User");
const _ = require("lodash");

module.exports.list = (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json(err));
};

module.exports.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  user
    .save()
    .then(user => res.send(user))
    .catch(err => res.send(err));
};

module.exports.login = (req, res) => {
  const body = req.body;
  User.findByCredentials(body.email, body.password)
    .then(function(user) {
      return user.generateToken();
    })
    .then(function(token) {
      return res.send({ token });
    })
    .catch(function(err) {
      res.send(err);
    });
};

module.exports.show = (req, res) => {
  const { user } = req;
  res.send(_.pick(user, ["_id", "username", "email"]));
};

module.exports.destroy = (req, res) => {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(function() {
      res.send({ notice: "Successfully logged out" });
    })
    .catch(function(err) {
      res.send(err);
    });
};
