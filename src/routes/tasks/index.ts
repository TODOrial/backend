import { Router } from "express";
import { TaskController } from "../../controllers";

const router = Router();

router.get("/", TaskController.index);
router.get("/:id", TaskController.show);
router.post("/create", TaskController.store);
router.patch("/:id/edit", TaskController.update);
router.delete("/:id/delete", TaskController.destroy);

export default router;
