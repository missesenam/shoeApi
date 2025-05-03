const express = require("express");
const {
  createShoe,
  retrieveShoe,
  updateShoe,
  deleteShoe,
} = require("../controllers/ShoesContoller");

const router = express.Router();

router.post("/shoes", createShoe);
router.get("/shoes", retrieveShoe);
router.get("/shoes/category/:category", retrieveShoe);
router.put("/shoes/:id", updateShoe);
router.delete("/shoes/:id", deleteShoe);

module.exports = router;
