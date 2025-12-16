const express = require('express');
const app = express();

app.use(express.json());

// Route bắt buộc
app.get('/', (req, res) => {
  res.send('Backend is running OK');
});

// Render bắt buộc dùng PORT này
const PORT = process.env.PORT;

// Log để Render detect service
app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
