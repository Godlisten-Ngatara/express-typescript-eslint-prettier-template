import express from "express";

const app = express();

const port = process.env.PORT ?? "9001";

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
