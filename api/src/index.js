const app = require("./app.js");

const PORT = process.env.PORT || 3005;

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});