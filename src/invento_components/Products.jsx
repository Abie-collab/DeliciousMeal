import {useContext} from 'react'
import {ProductContext} from '../context/ProductContext.jsx'

const Products = () => {
  const { products,setProducts } = useContext(ProductContext);
  var k = 1
  return (
    <div>
        <div className="row products text-center">
        <div className="col-md-6 offset-md-3">
            <h3>Products Inventory </h3>
        </div>
        <div className="col-md-8 offset-md-2">
            <table className="table">
            <thead>
                <tr>
                <th>S/N</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.length > 0 && products.map(function(prod){
                            return (
                                     <tr key={prod.id}>
                                        <td>{k++}</td>
                                        <td>{prod.productname}</td>
                                        <td>{prod.qty}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" onClick={
                                                function(){
                                                    //filter all the products and remove the id that was clicked
                                                    var neededProducts = products.filter(function(prd){
                                                            return prd.id != prod.id
                                                    })
                                                    setProducts(neededProducts)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                            )
                    })
                }
               
               
            </tbody>
            </table>
        </div>
        </div>

    </div>
  )
}

export default Products
