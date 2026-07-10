import { useState } from "react"

import AccountBalance from "./banking_components/AccountBalance"
import Form from "./banking_components/Form"
import Hi from "./banking_components/Hi"
import Hello from "./banking_components/Hello"


const Banking = () => {
    //the balance state will be here in the parent as it is needed by more than one component
  const[balance, setBalance] = useState(0) //assume we send a request to an api endpoints returns the balance  of the user
    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1> Banking App </h1>
                </div>
            </div>
            {
                balance > 1000 ? <p className="alert alert-success">You are doing well</p> : <p className="alert alert-warning">keep hustling</p> 
            }
            <AccountBalance balance={balance} />
            <Form balance={balance} setBalance={setBalance} />

            <hr />
            <Hi />
            <Hello />
        </div>
    )
}

export default Banking