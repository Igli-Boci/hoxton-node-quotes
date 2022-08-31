import express from "express";


const app = express();
const port = 3010;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
  });


app.listen(port, function () {
    console.log(`Server is Online on ${port}`);
  });