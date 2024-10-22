import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "RES" });
    console.log("Connected to DB");
  } catch (err) {
    console.log(`Can't connect to DB: ${err}`);
  }
};
