

const AccountBalance = ({balance}) => {
  return (
    <div className="row">
        <div className="col-md-8 offset-md-2 py-2">
            <p>Balance: <strong>{balance}</strong></p>
        </div>
    </div>
  )
}

export default AccountBalance