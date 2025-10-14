
const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://luiz-eduardo:ithinkthisoneworks@bestclusterever.i4voldh.mongodb.net/?retryWrites=true&maxPoolSize=20&w=majority&appName=BestClusterEver";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await listDatabases(client);
    } catch (e) {
    console.error(e);
    } finally {
    await client.close();
  }
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);
