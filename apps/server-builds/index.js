const express = require('express');
const path = require('path');

const app = express();
const PORT = 6000; // You can change the port as needed
const cors = require('cors');
const host = require('./data/host.prod.json');

app.use(cors());

app.get('/mini-app/:app', (req, res) => {
  const app = req.params.app;
  const platform = req.query.platform;
  const appVersion = req.query.version;
  const fileName = req.query.file;

  console.log('mini app req.query');
  console.log(req.query);

  const dir = path.resolve(
    __dirname,
    `./build/${app}/${appVersion}/${platform}/remotes/${fileName}`,
  );

  console.log('dir ####');
  console.log(dir);

  res.sendFile(dir);
});

app.get('/host', (req, res) => {
  const platform = req.query.platform;
  const appVersion = req.query.version;

  res.send(host[platform][appVersion]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
