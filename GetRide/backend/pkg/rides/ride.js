const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  pickupPoints: {
    type: [String], //za povekje mesta na zastanuvanje
    required: true,
  },
  passengers: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  driverId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Driver',
    required: true 
  }
});

const Ride = mongoose.model("Ride", RideSchema);
module.exports = Ride;
