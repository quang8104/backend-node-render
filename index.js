const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Test API
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// MongoDB connection
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('MONGODB_URI is missing');
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// IMPORTANT: Render PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
