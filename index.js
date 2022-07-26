const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res
    .status(200)
    .end('<form method="POST">Scrie ceva aici &rarr; <input type="text" name="textul"><input type="submit"></form>');
});

app.post('/', (req, res) => {
  res
    .status(200)
    .set("Content-type", "text/plain")
    .set("Content-disposition", "attachment; filename=cucu.txt")
    .end(req.body.name);
});
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
