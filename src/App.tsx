import { ApolloProvider } from "@apollo/client";

import { Client } from "./lib/apollo";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
