const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

// Connection URL
const url = process.env.DATABASE_URL;

// Create a new MongoClient
const client = new MongoClient(url);

async function connectAndGetClient() {
  // Connect to the MongoDB server
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    return client;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
}

module.exports = connectAndGetClient;
