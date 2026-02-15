const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/db", usersController.getUsersFromDB);
router.get("/db/:userId", usersController.getUserByIdFromDB);

router.post("/db", usersController.createUser);
router.post("/db/many", usersController.createManyUsers);

router.put("/db/:userId", usersController.updateUser);
router.put("/db/many", usersController.updateManyUsers);
router.put("/db/replace/:userId", usersController.replaceUser);

router.delete("/db/:userId", usersController.deleteUserFromDB);
router.delete("/db/many", usersController.deleteManyUsers);

module.exports = router;
