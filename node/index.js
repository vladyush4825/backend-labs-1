const express = require('express');
const app = express();
const PORT = 8002;

app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

app.listen(PORT, () => {
  console.log(`Node.js server running on port ${PORT}`);
});
