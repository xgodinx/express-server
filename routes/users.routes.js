const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

const basicAuth = require("../middlewares/auth.middleware");
const validateUserInput = require("../middlewares/validate.middleware");

router.get("/db", usersController.getUsersFromDB);
router.get("/db/:userId", usersController.getUserByIdFromDB);

router.get("/", basicAuth, usersController.getUsers);
router.post("/", basicAuth, validateUserInput, usersController.postUsers);

router.get("/:userId", basicAuth, usersController.getUserById);
router.put("/:userId", basicAuth, usersController.putUserById);
router.delete("/:userId", basicAuth, usersController.deleteUserById);

console.log("basicAuth:", basicAuth);
console.log("usersController:", usersController);

module.exports = router;
