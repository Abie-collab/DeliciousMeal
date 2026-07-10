
const Content = ({count,fruits,products,updater}) => {
    //a function that handles click of decrease button
        function handle_decrease(){
            updater(count-1)
            console.log()
        }

          //a function that handles click of increase button
          function increase(){
            updater(count+1)
             console.log()
          }

    return(
        <div>
            <p>The total count is {count}</p>
            {/* loop through array fruits .map() */}
            <ul>
                  {
                fruits.map(function(fruit, index){
                    return <li key={index}> {fruit} </li>
                })
            }
            </ul>
           <p>Available Products</p>
           <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      products.map(function(pro){
                        return (
                            <tr key={pro.id}>
                                <td> {pro.id} </td>
                                <td> {pro.name} </td>
                                <td> {pro.price} </td>
                            </tr>
                        )
                      })
                    }
                </tbody>
           </table>
           {/* <button onClick={()=>{alert('You increase me')}} >Increase </button> */}
           <button onClick={increase} >Increase </button>
           {/* calling a fucntion that respond to an event */}
           <button onClick={handle_decrease}>Decrease</button>
        </div>
    )
}

export default Content