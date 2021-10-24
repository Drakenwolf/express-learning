const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    name: "categori1",
    id: "10",
  });
});

router.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
