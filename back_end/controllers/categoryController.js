const { Category } = require("../models/categoryModel");
// const { Menu } = require("../models/menuModel");

const categoryController = {
  // Add category
  // Get all category
  getAll: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // Get category by id
  getCategoryById: async (req, res) => {
    try {
      const cateById = await Category.findById(req.params.id).populate("menus");
      console.log(cateById);
      return res.status(200).json(cateById);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  // Update category by id
  // Delete category bu id
};

module.exports = categoryController;
