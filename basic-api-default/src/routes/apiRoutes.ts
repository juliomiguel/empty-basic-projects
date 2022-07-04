import { Request, Response } from "express"
import { Router } from "express"

import { PingController } from "../controllers/PingController"

const router = Router();
//PING#
const ping = new PingController();

router.get('/ping', ping.getPing);
router.post('/ping', ping.postPing);

//CONTROLLER NAME...

export default router;