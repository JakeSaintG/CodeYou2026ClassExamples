"use strict"

import dotenv from 'dotenv';
import cors from "cors";
import express from "express";

dotenv.config();

const app = express();
app.use(cors());

const port = 8080;

app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        return returnedData.urls.regular;

        /* THE ABOVE CAN ALSO BE WRITTEN AS */
        // return await fetch(endpoint)
        //     .then(response => response.json())
        //     .then(returnedData => returnedData.urls.regular);
    } catch (error) {
        console.error(error);
    }
}

app.use("/api/v1/getRandomImage", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await getRandomImage(),
    });
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log("Press Ctrl+C to end this process.");
});
