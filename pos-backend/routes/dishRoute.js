const express = require("express");
const { addDish, getDishes } = require("../controllers/categoryController");
const { isVerifiedUser } = require("../middlewares/tokenVerification");

const router = express.Router();

router.route("/")
  .post(isVerifiedUser, addDish)
  .get(isVerifiedUser, getDishes);

module.exports = router;
