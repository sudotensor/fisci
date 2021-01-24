import * as React from "react";
import { useState } from "react";
import { TransactionForm } from "../components/TransactionForm";
import "./transactions-page.css";

type Props = {};

export function TransactionsPage(props: Props) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <h1>Transactions</h1>
      <p>This is where you can see previous transactions, or enter new ones</p>

      <div className={"row"}>
        <h2>Transaction records</h2>
        <div>
          <button>
            <img
              width={20}
              height={20}
              src={
                "https://www.flaticon.com/svg/vstatic/svg/860/860801.svg?token=exp=1611481664~hmac=0ad7506d2e14df29b6a9b5e8a996c580"
              }
            />
          </button>
          <button
            onClick={() => {
              setShowForm((p) => !p);
            }}
          >
            <img
              width={20}
              height={20}
              src={
                "https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1611481697~hmac=3abd51a1c2b3e445af126be743230072"
              }
            />
          </button>
        </div>
      </div>
      <div className={"row"}>
        <input placeholder={"Search"} />
        <div>
          <select>
            <option>Sort</option>
          </select>
          <select>
            <option>Filter</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Shop</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>11/05/2020</td>
            <td>Costa</td>
            <td>3.79</td>
            <td>non-essential</td>
          </tr>
          <tr>
            <td>19/01/2021</td>
            <td>Sports Direct</td>
            <td>24.99</td>
            <td>non-essential</td>
          </tr>
        </tbody>
      </table>

      <p>{showForm.valueOf()}</p>
      {showForm && <TransactionForm />}
    </div>
  );
}
