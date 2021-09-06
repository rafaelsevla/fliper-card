
import { ApolloClient, ApolloLink, concat,HttpLink,InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'https://harura-fliper-test.herokuapp.com/v1/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(() => ({
    headers: {
      'x-hasura-admin-secret': process.env.REACT_APP_ADMIN_SECRET
    }
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});


export default client;
