const express = require("express"); //routes.js file require express because route object is belongs to express
const router = express(); //here router is inherit the properies of express
const notesController = require("../app/controllers/notesController");
const categoriesController = require("../app/controllers/categoriesController");
const UsersController = require("../app/controllers/UsersController");
const { authenticateUser } = require("../app/middlewares/authentication");

router.get("/notes", authenticateUser, notesController.list);
router.get("/notes/:id", authenticateUser, notesController.show);
router.post("/notes", authenticateUser, notesController.create);
router.put("/notes/:id", authenticateUser, notesController.update);
router.delete("/notes/:id", authenticateUser, notesController.destroy);

router.get("/categories", authenticateUser, categoriesController.list);
router.get("/categories/:id", authenticateUser, categoriesController.show);
router.post("/categories", authenticateUser, categoriesController.create);
router.put("/categories/:id", authenticateUser, categoriesController.update);
router.delete(
  "/categories/:id",
  authenticateUser,
  categoriesController.destroy
);

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);
router.get("/account", authenticateUser, UsersController.show);
router.delete("/logout", authenticateUser, UsersController.destroy);
module.exports = router;
