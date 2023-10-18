const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());
let webhookData = null;

app.get("/webhook", (req, res) => {
  if (webhookData) {
    res.json(webhookData);
  } else {
    res.status(204).end();
  }
});

app.post("/webhook", (req, res) => {
  webhookData = req.body;

  res.status(200).send(webhookData);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Webhook receiver listening on port ${PORT}`);
});
