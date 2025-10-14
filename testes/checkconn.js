
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://luiz-eduardo:ithinkthisoneworks@bestclusterever.i4voldh.mongodb.net/?retryWrites=true&maxPoolSize=20&w=majority&appName=BestClusterEver";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
