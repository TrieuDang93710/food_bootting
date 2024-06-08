const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

//CONECTING DB// APP CONFI
// mongoose.connect(
//   `mongodb+srv://food-server:food3000@cluster0.bnadvrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
//   {
//     useNewUrlParser: true,
//   }
// );

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.json());
app.use(morgan("common"));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.bnadvrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    // Database and collection
    const db = client.db("food-server");
    const menuCollections = db.collection("menus");
    const cartCollections = db.collection("cartItems");

    // All menus item operations
    app.get("/menu", async (req, res, next) => {
      const rs = await menuCollections.find().toArray();
      console.log("result: ", rs);
      return res.send(rs);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// // router
// app.use("/v1/category", categoryRouter);

// Listen
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running...${process.env.PORT}`);
});
