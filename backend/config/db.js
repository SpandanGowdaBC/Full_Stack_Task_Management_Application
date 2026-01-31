const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.error('ERROR: MONGO_URI environment variable is EMPTY or MISSING!');
    process.exit(1);
  }

  // Debug log (safe) - showing only the start of the URI
  console.log(`URI Check: Found string starting with "${process.env.MONGO_URI.substring(0, 15)}..."`);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`DETAILED DB ERROR: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
