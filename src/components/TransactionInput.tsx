import './transaction-form.css'

export const TransactionInput = (props: { listNumber: number }) => {

    return (
        <div className={'transaction-details'}>
            <span>{props.listNumber}</span>
            <input placeholder={"date"} type={'date'}/>
            <input placeholder={"Shop name"}/>
            <input placeholder={"Amount"} type={'number'}/>
            <input placeholder={"Category (optional)"}/>
        </div>
    )
}
