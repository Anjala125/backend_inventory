import express from "express";
import {
  addItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from "../controllers/inventController.js";
import validate from "../middleware/validation.js";

const router = express.Router();

router.post("/", validate, addItem);
router.get("/", getItems);
router.get("/:id", getItemById);
router.put("/:id", validate, updateItem);
router.delete("/:id", deleteItem);

export default router;