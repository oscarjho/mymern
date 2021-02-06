const express = require('express');
const app =express();

let PORT = 5000;
console.log("NODE_ENV is", process.env.NODE_ENV);
app.listen(PORT, () => console.log("Server is runing on port", PORT));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

app.get('/api', (req, res) => {
    res.json({msg: "Api Runing"})
});