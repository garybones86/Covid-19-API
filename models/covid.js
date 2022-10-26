import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Country = new Schema({
  confirmed: { type: Number },
  deaths: { type: Number },
  country: { type: String },
  life_expectancy: { type: String },
  population: { type: Number },
});

export default mongoose.model("Country", Country);
