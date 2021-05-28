const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Chicão é gay!');
});

app.listen(process.env.PORT || 3000);