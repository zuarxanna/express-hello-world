const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello world");
});

const port = process.en.PORT || 3000;
app.listen(port, () => {
  console.log(`app run on port ${port}`);
});
