const express = require('express');
const app =express();

let port;
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
}

app.listen(port, () => {
  console.log("Express server is runing on port", port);
  console.log("NODE_ENV is", process.env.NODE_ENV);
});

app.get('/api', (req, res) => {
    res.json({msg: "Api Runing"})
});