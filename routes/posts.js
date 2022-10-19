const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const inventoryController = require("../controllers/inventory");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, inventoryController.getPost);

router.post("/createPost", upload.single("file"), inventoryController.createPost);

router.put("/likePost/:id", inventoryController.likePost);

router.delete("/deletePost/:id", inventoryController.deletePost);

module.exports = router;
