const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const   authModel = mongoose.model("auth" , authSchema);

module.exports = authModel;