import express from "express";

import {
  submitBetterPrice, getBetterPrice
} from "../controllers/betterPriceController.js";

const router = express.Router();

router.post("/create-bestprice-request", submitBetterPrice);
router.get("/get-bestprices-request", getBetterPrice);

export default router;
