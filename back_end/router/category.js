const categoryController = require("../controllers/categoryController");

const router = require("express").Router();

//ADD AUTHOR

//GET ALL AUTHORS
router.get("/", categoryController.getAll);

//GET AN AUTHOR
router.get("/:id", categoryController.getCategoryById);
//UPDATE AN AUTHOR

//DELETE AUTHOR

module.exports = router;
