const express = require('express');
const app = express();

app.get('', (req, res) => {
  const param = req.query.param;
  if (param) {
    res.send(param);
  } else {
    res.send('Param required');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
