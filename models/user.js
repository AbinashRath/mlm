const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    
      name:{
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
    roll: {
      type: String,
       required: true,
    },
    joiningDate: {
      type: Date,
      required: true,
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
module.exports = mongoose.model("User", userSchema);
