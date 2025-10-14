const { MongoClient } = require("mongodb");

async function main() {
    const uri = "mongodb+srv://luiz-eduardo:ithinkthisoneworks@bestclusterever.i4voldh.mongodb.net/?retryWrites=true&maxPoolSize=20&w=majority&appName=BestClusterEver";
    const client = new MongoClient(uri);
    await client.connect();
    await findListings(client, 10);
    await client.close();
}

async function findListings(client, resultsLimit) {
    const cursor = client.db('sample_airbnb')
        .collection("listingsAndReviews")
        .find()
        .limit(resultsLimit);
    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log(`Found ${results.length} listing(s): `);
        results.forEach((result, i) => {
            console.log(`\n${i + 1}. Name: ${result.name}`);
            console.log(` Bedrooms: ${result.bedrooms}`);
            console.log(` Bathrooms: ${result.bathrooms}`);
        });
    }
}

main();