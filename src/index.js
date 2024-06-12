require('dotenv').config();
const express = require('express');
const winston = require('winston');
const WinstonLogStash = require('winston3-logstash-transport');

const app = express();

const logger = winston.createLogger();

logger.add(
  new WinstonLogStash({
    mode: 'udp',
    host: '30753505-26cd-4b9b-a12e-7f6278f36386-ls.logit.io',
    port: 24026,
  }),
);

app.get('', (req, res) => {
  const param = req.query.param;
  if (param) {
    logger.log({
      level: 'info',
      message: req.query,
    });
    res.send(param);
  } else {
    logger.log({
      level: 'error',
      message: 'Param required',
    });
    res.send('Param required');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
