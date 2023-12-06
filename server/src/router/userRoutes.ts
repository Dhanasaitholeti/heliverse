import {
  createUser,
  deleteUser,
  feedData,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/feed", feedData);

export default router;
