import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { TransactionForm } from "./components/TransactionForm";

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
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <TransactionForm />
        <p id={"api-test"}>
          <code>API TEST: </code>The current time is {currentTime}.
        </p>
      </main>
    </div>
  );
}

export default App;
