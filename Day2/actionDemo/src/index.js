// Traditionally, this would be done in typescipt
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

// Send all files in the form folder via localhost:3000/main
app.use("/form", express.static("./src/form"));

// Send all files in the success folder via localhost:3000/main
app.use("/success", express.static("./src/success"));

app.post("/form_submit", (req, res) => {
    console.log(req.body)
    console.log(res.body)

    res.status(200);
})

app.post("/form_submit_redirect", (req, res) => {
    console.log(req.body)
    console.log(res.body)

    // Old school form submissions tend to redirect a user to a "success" or "error" page.
    // We'll do the same!
    return res.redirect('/success'); 
})

app.get("/ping", (req, res) => {
    res.send();
})

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
    console.log(`Please navigate to the below link view the form demo.`);
    console.log(`\r\nhttp://localhost:${port}/form`);
    console.log(`- Windows/Linux: ctrl+click on the above link`);
    console.log(`- Mac: cmd+click on the above link`);
});
