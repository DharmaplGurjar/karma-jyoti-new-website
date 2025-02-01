import mongoose, { Schema, model, models } from "mongoose";

const visitorSchema = new Schema({
  ip: { type: String, required: true },
  browser: { type: String, required: true },
  platform: { type: String, required: true },
  language: { type: String, required: true },
  visitTime: { type: Date, required: true },
  page: { type: String, required: true },
  deviceType: { type: String, required: true },
  location: { type: String, required: true }
},{ unique: true });

const Visitor = models?.Visitor || model("Visitor", visitorSchema);

export default Visitor;
