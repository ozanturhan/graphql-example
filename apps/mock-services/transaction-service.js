import express from 'express';

const port = 4002;
const app = express();

const transactionsData = [
  {
    id: 1,
    customerId: 1,
    type: 'sale',
    total: 300,
  },
  {
    id: 2,
    customerId: 1,
    type: 'payment',
    total: 300,
  },
  {
    id: 3,
    customerId: 1,
    type: 'sale',
    total: 300,
  },
];

app.get('/transactions/:customer', (req, res) => {
  const transactions = transactionsData.filter(transaction => transaction.customerId === +req.params.customer);

  res.send(transactions);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
