const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: [true, "Please enter a car brand"],
    },

    model: {
      type: String,
      required: [true, "Please enter a car model"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0,
    },
    image: String,
    year: Number,
  },
  {
    timestamps: true,
  }
);

const CarModel = mongoose.model("Cars", carSchema)

module.exports = CarModel;