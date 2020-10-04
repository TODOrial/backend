import { Router } from "express";

import testRoute from "./test";
import tasksRoute from "./tasks";

const router = Router();

router.use(testRoute);
router.use("/tasks", tasksRoute);

export default router;
