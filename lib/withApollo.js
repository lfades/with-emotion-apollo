import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache }  from 'apollo-boost'

console.log('Hello!')

export default withApollo(({ ctx, headers, initialState }) => (
  new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh/',
    cache: new InMemoryCache().restore(initialState || {})
  })
))
