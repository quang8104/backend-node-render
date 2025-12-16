const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// ROUTE TEST – RẤT QUAN TRỌNG
app.get('/', (req, res) => {
  res.status(200).send('Backend is running OK');
});

const PORT = process.env.PORT || 3000;

// DB: không để crash app
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB error:', err.message));
} else {
  console.log('No MongoDB URI');
}

// LISTEN ĐÚNG CỔNG RENDER
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
