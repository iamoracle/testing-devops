const express = require("express");
const { getDate } = require("./utils/date");

const app = express();
app.use(express.json());

app.get("/date", function (req, res) {
  res.status(200).json({
    date: getDate(),
  });
});

app.listen(5001, () => {
  console.log("listening Thank from port " + 5001);
});
