import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
    console.log(error);
  }
};

export default connectToDb;
