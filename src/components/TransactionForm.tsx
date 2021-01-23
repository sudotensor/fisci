import './transaction-form.css'
import {TransactionInput} from "./TransactionInput";
import {useState} from "react";

export const TransactionForm = () => {
    const [numberOfTransactions, setNumberOfTransactions] = useState(0)
    return (
        <div className={'transaction-form'}>
            <h3>Enter transactions</h3>
            <button onClick={() => setNumberOfTransactions(p => p + 1)}
                    className={'new-transaction'}>New transaction
            </button>
            {
                Array(numberOfTransactions).fill(<TransactionInput/>)
            }
        </div>
    )
}
