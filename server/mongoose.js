const mongoose = require('mongoose');
const enabled = require('debug').enabled;

// Use native promises
mongoose.Promise = global.Promise;

mongoose.connect(process.env.TALK_MONGO_URL);

if (enabled('talk:db')) {
  mongoose.set('debug', true);
}

mongoose.connection.on('error', (err) => {
  throw err;
});

module.exports = mongoose;