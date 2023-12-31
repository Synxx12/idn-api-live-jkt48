const express = require("express");
const idnlivesRouter = require("./src/routes/idnlives");

const app = express();
const port = 3000;

app.use("/api/idnlives/jkt48", idnlivesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
