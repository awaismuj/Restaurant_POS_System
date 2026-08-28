const Category = require("../models/categoryModel");
const Dish = require("../models/dishModel");
const createHttpError = require("http-errors");

const addCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;

    if (!name || !name.trim()) {
      const error = createHttpError(400, "Please provide category name!");
      return next(error);
    }

    const categoryName = name.trim();
    const existingCategory = await Category.findOne({ name: categoryName });

    if (existingCategory) {
      const error = createHttpError(400, "Category already exists!");
      return next(error);
    }

    const category = await Category.create({
      name: categoryName,
      description: description || "",
    });

    res.status(201).json({
      success: true,
      message: "Category added!",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    next(error);
  }
};

const addDish = async (req, res, next) => {
  try {
    const { name, price, category, image } = req.body;

    if (!name || !name.trim()) {
      const error = createHttpError(400, "Please provide dish name!");
      return next(error);
    }

    if (!price && price !== 0) {
      const error = createHttpError(400, "Please provide dish price!");
      return next(error);
    }

    const dishName = name.trim();
    const dishCategory = category ? category.trim() : "";

    const existingDish = await Dish.findOne({ name: dishName });
    if (existingDish) {
      const error = createHttpError(400, "Dish already exists!");
      return next(error);
    }

    let categoryDoc = null;
    if (dishCategory) {
      categoryDoc = await Category.findOne({ name: dishCategory });
    }

    if (!categoryDoc) {
      const error = createHttpError(400, "Category not found. Please create the category first.");
      return next(error);
    }

    const dish = await Dish.create({
      name: dishName,
      price: Number(price),
      category: categoryDoc._id,
      image: image || "",
    });

    const populatedDish = await dish.populate({ path: "category", select: "name" });

    res.status(201).json({
      success: true,
      message: "Dish added!",
      data: populatedDish,
    });
  } catch (error) {
    next(error);
  }
};

const getDishes = async (req, res, next) => {
  try {
    const dishes = await Dish.find().populate({ path: "category", select: "name" }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: dishes });
  } catch (error) {
    next(error);
  }
};

module.exports = { addCategory, getCategories, addDish, getDishes };
