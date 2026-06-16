import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

// Pull in the contents of the .env file
dotenv.config();

const API_KEY = process.env.API_KEY;

if (API_KEY === undefined) {
    throw 'Failed to retrieve API_KEY from .env file.';
}

const port = 3000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Needed to parse the inputs
app.use(cors());

// Though the magic of node, we can create a .env file for the user! Give it a shot here.
// Hint: You'll need to import 'fs'.

// Send all files in the form folder via localhost:3000/
app.use("/", express.static("./src/page"));

app.get("/key", (req, res) => {
    res.status(200).json({key: API_KEY});
})

app.get("/ping", (req, res) => {
    res.send();
})

app.listen(port, () => {
    console.log(`API listening on port ${port}. Please navigate to the below link view the page.`);
    console.log(`http://localhost:${port}`);
    console.log(`- Windows/Linux: ctrl+click on the above link`);
    console.log(`- Mac: cmd+click on the above link`);
});
