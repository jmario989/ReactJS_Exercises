import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

function ExchangeRates(){
  const { loading, error, data } = useQuery(gql`
    { 
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>{error.toString()}</p>;

  return data.rates.map(({ currency, rate }) => {
    return (
      <div key={currency}>
        <p>{currency}: {rate}</p>
      </div>
    );
  });

}


function App() {
  return (
    <ApolloProvider client={client} >
      <div>
          <h2>Upit prema serveru</h2>
          <ExchangeRates />
      </div>
    </ApolloProvider>
  );
}

export default App;
