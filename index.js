const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.send('Backend + MongoDB Atlas OK');
});

const ItemSchema = new mongoose.Schema({
  name: String
});
const Item = mongoose.model('Item', ItemSchema);

app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
