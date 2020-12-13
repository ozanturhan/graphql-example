import express from 'express';

const port = 4001;
const app = express();

app.get('/customers', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'Mehmet Ozan',
      surname: 'Turhan',
      currency: 'EUR',
      balance: 300,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
