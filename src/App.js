import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contacts } from "./pages";
import { Header, Nav, Footer, Layout } from "./layouts";

function App() {
  return (
    <Layout>
      <Header />
      <Router>
        <Nav />

        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </Layout>
  );
}

export default App;
