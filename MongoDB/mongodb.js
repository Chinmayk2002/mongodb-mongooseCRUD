const { MongoClient } = require("mongodb");
const url = "url";

// create new client
const client = new MongoClient(url);

const dbConnect = async () => {
  try {
    // connect to db
    await client.connect();
    console.log("db connected successfully");

    // create new db
    const db = client.db("school");
    // create collection
    const students = db.collection("students");
    // crete document
    const student1 = await students.insertOne({
      name: "John Doe",
      city: "pune",
    });
    const students2 = await students.insertMany([
      {
        name: "Bon Doe",
        city: "pune",
      },
      {
        name: "Gon Doe",
        city: "pune",
      },
      {
        name: "Jen Doe",
        city: "pune",
      },
    ]);
    // display records
    const allStudents = await students.find().toArray();
    // find by name
    const foundSt = await students.findOne({ name: "Bon Doe" });
    // find all from pune
    const foundSts = await students.find({ city: "pune" }).toArray();
    // update record
    const updatedStud = await students.updateOne(
      { name: "Gon Doe" },
      { $set: { name: "Jam Doe", city: "Mumbai" } }
    );
    // delete document
    const deleteStud = await students.deleteOne({ name: "Jen Doe" });
  } catch (error) {
    console.log(error);
  }
};

dbConnect();
