const app = require("express")();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen("3000", () => {
  console.log(`app run on port 3000`);
});
