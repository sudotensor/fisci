import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { OverviewPage } from "./pages/OverviewPage";
import { InsightsPage } from "./pages/InsightsPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { GuidesPage } from "./pages/GuidesPage";

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("https://fisci-iqk43m4jga-ew.a.run.app/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      })
      .catch((e) => console.error("Error fetching time from API", e));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <nav>
          <Link to={"/"}>Overview</Link>
          <Link to={"/transactions"}>Transactions</Link>
          <Link to={"/insights"}>Insights</Link>
          <Link to={"/guides"}>Guides for understanding finance</Link>
        </nav>
        <main>
          <Switch>
            <Route path={"/login"}>
              <LoginPage />
            </Route>
            <Route path={"/transactions"}>
              <TransactionsPage />
            </Route>
            <Route path={"/insights"}>
              <InsightsPage />
            </Route>
            <Route path={"/guides"}>
              <GuidesPage />
            </Route>
            <Route path={"/"}>
              <OverviewPage />
            </Route>
          </Switch>
          <p id={"api-test"}>
            <code>API TEST: </code>The current time is{" "}
            {new Date(currentTime * 1000).toLocaleTimeString()}
          </p>
        </main>
      </div>
    </Router>
  );
}

export default App;
