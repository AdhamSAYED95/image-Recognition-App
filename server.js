const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const predictRoute = require("./routes/predictRoute");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/predict", predictRoute);

app.get("/", function (req, res) {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
