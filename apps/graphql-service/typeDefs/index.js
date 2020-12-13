import { gql } from 'apollo-server';

const index = gql`
  type Customer {
    id: Int!
    name: String!
    surname: String!
    currency: String!
    balance: Float!
    balanceText: String!
    customerTransactions: [CustomerTransaction]
  }

  type CustomerTransaction {
    id: Int!
    type: String!
    total: Float
  }

  type Query {
    customers: [Customer]
  }
`;

export default index;
