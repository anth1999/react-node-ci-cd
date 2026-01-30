
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Backend is running successfully 🚀'
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

