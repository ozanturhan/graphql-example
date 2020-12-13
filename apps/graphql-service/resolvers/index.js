import fetch from 'node-fetch';

const resolvers = {
  Query: {
    customers: async () =>
      await fetch('http://localhost:4001/customers', {
        method: 'get',
      }).then(res => res.json()),
  },
  Customer: {
    customerTransactions: async customer =>
      await fetch(`http://localhost:4002/transactions/${customer.id}`, {
        method: 'get',
      }).then(res => res.json()),
    balanceText: customer => {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: customer.currency,
      });

      return formatter.format(customer.balance);
    },
  },
};

export default resolvers;
