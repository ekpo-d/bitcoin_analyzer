const Trade = require("../models/trade"),
      apiRepsonse = require('../utilities/api_response');

function createTradeItem(req, action, createModel){
  let trade = {
    btc: req.body.btc,
    amount: req.body.amount,
    action: action,
    date: req.body.date
  };
  if (createModel) trade = new Trade(trade);
  return trade;
}

function findAll(req, res) {
  Trade.find({}, (err, docs) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({docs}, res);
  });
}

function findAllBuy(req, res) {
  Trade.find({action: 'buy'}, (err, docs) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({docs}, res);
  });
}

function createBuy(req, res) {
  const trade = createTradeItem(req, "buy", true);
  trade.save((err, doc) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record created", doc}, res);
  });
}

function updateBuy(req, res) {
  const trade = createTradeItem(req, "buy", false);

  Trade.findOneAndUpdate({id: req.id}, trade, {new: true}, (err, doc) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record updated", doc}, res);
  });
}

function deleteBuy(req, res) {
  Trade.remove({id: req.id}, (err) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record deleted"}, res);
  });
}

function findAllSell(req, res) {
  Trade.find({action: 'sell'}, (err, docs) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({docs}, res);
  });
}

function createSell(req, res) {
  const trade = createTradeItem(req, "sell", true);
  trade.save((err, doc) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record created", doc}, res);
  });
}

function updateSell(req, res) {
  const trade = createTradeItem(req, "sell", false);

  Trade.findOneAndUpdate({id: req.id}, trade, {new: true}, (err, doc) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record updated", doc}, res);
  });
}

function deleteSell(req, res) {
  Trade.remove({id: req.id}, (err) => {
    if (err) return apiRepsonse.sendError(err, 500, res);
    apiRepsonse.sendSuccess({message: "Trade record deleted"}, res);
  });
}

module.exports = {
  findAll: findAll,
  findAllBuy: findAllBuy,
  createBuy: createBuy,
  updateBuy: updateBuy,
  deleteBuy: deleteBuy,
  findAllSell: findAllSell,
  createSell: createSell,
  updateSell: updateSell,
  deleteSell: deleteSell
}
