const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let teacherSchema = new Schema(
  {
    
      name:{
      type: String,
      required: true,
    },

      price: {
      type: String,
      required: true,
    },

    quantity: {
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
    collection: "products",
    status: true,
  }
);
module.exports = mongoose.model("Product", productSchema);
