import * as React from "react";
import { TransactionForm } from "../components/TransactionForm";

type Props = {};

export function TransactionsPage(props: Props) {
  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm />
    </div>
  );
}
