const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");
const connectAndGetClient = require("./mongodb-connection");

const port = 3000;
const app = express();
let client;
app.use(cors("*"));
app.use(express.json());

app.post("/todos", async (req, res) => {
  if (!req.body.name)
    return res.status(400).json({ error: "Name is required" });
  await client
    .db("todos")
    .collection("todos")
    .insertOne({ name: req.body.name });
  return res.json({ message: "Todo created successfully" });
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  console.log(req.params.id);
  const result = await client
    .db("todos")
    .collection("todos")
    .deleteOne({ _id: new ObjectId(req.params.id) });
  return res.json({ message: "Todo deleted successfully" });
});

app.get("/", async (req, res) => {
  const allTodos = await client
    .db("todos")
    .collection("todos")
    .find()
    .toArray();
  return res.json(allTodos);
});

app.listen(port, async () => {
  client = await connectAndGetClient();
  console.log(`Server is listening on port ${port}`);
});
