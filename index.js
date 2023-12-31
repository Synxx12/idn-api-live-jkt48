const express = require("express");
const cors = require("cors");
const idnlivesRouter = require("./src/routes/idnlives");

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Use middleware to parse JSON requests
app.use(express.json());

// Use routes
app.use("/api/idnlives", idnlivesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
