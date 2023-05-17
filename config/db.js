const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
        "Host:-"+ " " +connect.connection.host+ " "+"Name:-"+ " " +
      connect.connection.name + "Database Connected"
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};
module.exports = connectDB;
