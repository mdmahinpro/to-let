const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { useParams } = require("react-router-dom");

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://mahinbinraihan123:RUpPOcnfEQIEyVjV@cluster0.jebhpvx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const courseDB = client.db("courseDB");
    const courseCollection = courseDB.collection("courseCollection");

    //Working fine
    app.get("/courses", async (req, res) => {
      const allCourses = courseCollection.find();
      const result = await allCourses.toArray();
      res.send(result);
    });

    app.get("/courses/:id", async (req, res) => {
      const id = req.params.id;
      const course = await courseCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(course);
    });

    app.post("/courses", async (req, res) => {
      const courseData = req.body;
      const result = await courseCollection.insertOne(courseData);
      res.send(result);
    });

    app.patch("/courses/:id", async (req, res) => {
      const id = req.params.id;
      const updatedCourse = req.body;
      const result = await courseCollection.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: updatedCourse }
      );
      res.send(result);
    });

    app.delete("/courses/:id", async (req, res) => {
      const id = req.params.id;
      const result = await courseCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    console.log("Database is connected");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(port, (req, res) => {
  console.log(`App is listening on port ${port}`);
});
