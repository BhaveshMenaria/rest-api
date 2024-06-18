const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/categoryController");
const productController = require("../Controllers/productController");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/category/thumbnail");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// router.post("/category",categoryController.store);
router.get("/category", categoryController.index);
router.delete("/category/:id", categoryController.delete);
// router.get("/category/:id",categoryController.get);
router.get("/category/:title", categoryController.getTitle);
router.put("/category/:id", categoryController.update);
router.post("/product", productController.store);
router.get("/product", productController.index);
router.delete("/product", productController.delete);
router.post("/category", upload.single("thumbnail"), categoryController.store);

module.exports = router;
