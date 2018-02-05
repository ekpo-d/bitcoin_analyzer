const mongoose = require('mongoose');

const tradeSchema = mongoose.Schema({
  btc: {type: Number, required: true},
  amount: {type: Number, required: true},
  action: {type: String, required: true},
  date: { type: Date, required: true}
});

module.exports = mongoose.model('Trade', tradeSchema);