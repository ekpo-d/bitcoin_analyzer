const express = require("express"),
      router = express.Router();

const tradeController = require('../controllers/trade');

router.get("/", tradeController.findAll);

router.get("/buy", tradeController.findAllBuy);
router.post("/buy", tradeController.createBuy);
router.put("/buy/:id", tradeController.updateBuy);
router.delete("/buy/:id", tradeController.deleteBuy);

router.get("/sell", tradeController.findAllSell);
router.post("/sell", tradeController.createSell);
router.put("/sell/:id", tradeController.updateSell);
router.delete("/sell/:id", tradeController.deleteSell);

module.exports = router;