const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  // ...other code...
  res.send(`User ${userId}`);
});
app.listen(3000, () => console.log('Server started on port 3000'));