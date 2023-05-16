const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// POST request handler
app.post("/", (req, res) => {
  const { body } = req;
  // Process the POST request body
  // ...

  // Example: Log the received data
  console.log("Received POST data:", body);

  res.send("POST request received");
});

// PUT request handler
app.put("/", (req, res) => {
  const { body } = req;
  // Process the PUT request body
  // ...

  // Example: Log the received data
  console.log("Received PUT data:", body);

  res.send("PUT request received");
});

// DELETE request handler
app.delete("/", (req, res) => {
  // Process the DELETE request
  // ...

  res.send("DELETE request received");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
