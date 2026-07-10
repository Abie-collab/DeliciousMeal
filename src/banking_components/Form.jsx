import { useState } from "react"

const Form = ({balance, setBalance}) => {
    //creating a state to track amount enter:useState hook
    const [amount, setAmount] = useState("")
    function withdraw(){
        if(amount == ""){
            alert("Please enter amount to withdraw")
            return false
        }

        if(amount > balance){
            alert("Insufficient fund")
            return false
        }

        var amount_to_withdraw = Number(amount);
        var currentBalance = balance - amount_to_withdraw
        setBalance(currentBalance)
    }

    function deposit(){
        if(amount == ""){
            alert("Please enter amount to deposit")
            return false;
        }

        var amount_to = Number(amount);
        var currentBalance = balance + amount_to
        setBalance(currentBalance)
        setAmount("")
    }

  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <div className="mb-2">
                {/* how to manage input n react */}
                <input type="number" className="form-control" value={amount} onChange={function(e){
                    setAmount(e.target.value);
                }} />
            </div>
            <div className="mb-2">
                <button className="btn btn-danger col-6" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-primary col-6" onClick={deposit}>Deposit</button>
            </div>
        </div>
    </div>
  )
}

export default Form