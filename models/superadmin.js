const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let superadminSchema = new Schema(
  {

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    joiningDate: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required:true,
    },
    balance: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: "user",
    status: true,
  }
);
module.exports = mongoose.model("superadmin", superadminSchema);
