
const Header = (props) => {
    console.log(props)
    return(
        <div className="row">
            <h1>Welcome to {props.app} </h1>
            <p>Count : {props.ct}</p>
        </div>
    )
}
export default Header