// stores configuration files. such as database configuration files, many more...
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://venkateswarareddychalla:9347375821@cluster0.oywyw6u.mongodb.net/food-delivery"
    )
    .then(() => console.log("MongoDB connected successfully"));
};
