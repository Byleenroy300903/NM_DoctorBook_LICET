const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err.message}`);
    });
};


module.exports = connectToDB;
