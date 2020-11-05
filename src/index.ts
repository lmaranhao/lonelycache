import express = require('express');
import bodyParser = require('body-parser');

const app = express();
const port = 8080; // default port to listen

const cache:any = {};
app.use(bodyParser.text());

app.post('/add', (req: any, res: any) => {
  const key = Date.now().toString();
  cache[key] = req.body;
  console.log(cache);
  res.setHeader('Location', `/fetch/${cache[key]}`);
  res.status(201).send(key);
});

app.put('/update/:key', (req: any, res: any) => {
  const key = req.params.key;
  cache[key] = req.body;
  console.log(cache);
  res.status(200).send(key);
});

app.get('/fetch/:key', (req: any, res: any) => {
  console.log(cache);
  res.status(200).send(cache[req.params.key]);
});

app.delete('/delete/:key', (req: any, res: any) => {
  delete cache[req.params.key];
  console.log(cache);
  res.status(200).send(cache[req.query.key]);
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
