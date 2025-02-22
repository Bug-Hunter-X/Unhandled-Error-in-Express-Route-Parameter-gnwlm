const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...other code...
  res.send(`User ${userId}`);
});
app.listen(3000, () => console.log('Server started on port 3000'));