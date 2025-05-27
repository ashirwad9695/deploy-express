const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  const messages = [
    "Hello World from Section 1",
    "Hello World from Section 2",
    "Hello World from Section 3"
  ];
  res.render('index', { messages });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
