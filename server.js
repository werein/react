const express = require('express');

const app = express();

const port = process.env.PORT ? process.env.PORT : 8080;
const dist = `${__dirname}/dist`;

app.use(express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, (error) => {
  if (error) {
    console.log(error); // eslint-disable-line no-console
  }
  console.info('Express is listening on port %s.', port); // eslint-disable-line no-console
});
