const express = require('express');
const app = express();

const PORT = 80; // Default HTTP port

app.get('/', (req, res) => {
  res.send('Hello World from EC2!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
