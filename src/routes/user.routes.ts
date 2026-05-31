import { Router } from "express";
import {createUser,getAllUsers,getUserById,updateUser,deleteUser,} from "../controllers/user.controller";
import {authMiddleware,} from "../middleware/auth.middleware";
import {roleMiddleware,} from "../middleware/role.middleware";

const router = Router();

router.post("/",authMiddleware,roleMiddleware("admin"),createUser);
router.get("/",authMiddleware,getAllUsers);
router.get("/:id",authMiddleware,getUserById);
router.put("/:id",authMiddleware,updateUser);
router.delete("/:id",authMiddleware,roleMiddleware("admin"),deleteUser);

export default router;