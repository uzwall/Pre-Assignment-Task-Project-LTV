require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const productRouter = require("./routes/product");
const mongoose = require("mongoose");

// db connection mongo
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}



// Redirect from '/' to '/product'
server.use((req, res, next) => {
  if (req.url === "/") {
    return res.redirect("/products");
  }
  next();
});

server.use(cors());
server.use(express.json());
server.use("/products", productRouter.routes);

server.listen(process.env.PORT, () => {
  console.log("server is running in port 8000");
});
