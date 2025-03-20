const Ride = require("../pkg/rides/ride.js");

const validateRideData = (data) => {
    const { from, pickupPoints, passengers, time, destination, driverId } = data;
    if (!from || !pickupPoints || !Array.isArray(pickupPoints) || pickupPoints.length === 0) {
      return "Pickup points are required and should be an array.";
    }
    if (typeof passengers !== 'number' || passengers <= 0) {
      return "Passengers must be a positive number.";
    }
    if (!time) {
      return "Time is required.";
    }
    if (!destination) {
      return "Destination is required.";
    }
    if (!driverId) {
      return "Driver ID is required.";
    }
    return null;
  };

// Create a new ride
const createRide = async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    console.error("Error creating ride:", error);
    res.status(500).json({ error: "Failed to create ride" });
  }
};

// Get all rides
const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error("Error fetching rides:", error);
    res.status(500).json({ error: "Failed to fetch rides" });
  }
};

// Get one ride by ID
const getRideById = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) return res.status(404).json({ error: "Ride not found" });
    res.json(ride);
  } catch (error) {
    console.error("Error fetching ride:", error);
    res.status(500).json({ error: "Failed to fetch ride" });
  }
};

// Delete a ride
const deleteRide = async (req, res) => {
  try {
    const ride = await Ride.findByIdAndDelete(req.params.id);
    if (!ride) return res.status(404).json({ error: "Ride not found" });
    res.json({ message: "Ride deleted successfully" });
  } catch (error) {
    console.error("Error deleting ride:", error);
    res.status(500).json({ error: "Failed to delete ride" });
  }
};

module.exports = { createRide, getAllRides, getRideById, deleteRide };
