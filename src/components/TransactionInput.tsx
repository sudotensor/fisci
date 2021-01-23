import './transaction-form.css'

export const TransactionInput = () => {

    return (
        <div className={'transaction-details'}>
            <input placeholder={"date"} type={'date'}/>
            <input placeholder={"Shop name"}/>
            <input placeholder={"Amount"} type={'number'}/>
            <input placeholder={"Category (optional)"}/>
        </div>
    )
}
