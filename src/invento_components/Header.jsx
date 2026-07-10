import {useContext} from 'react'
//to consume what is inside a provider 
//step 1- import a hook const{} :useContext(whichcontext)

    
//step 2- import the context object from the context file
import { ProductContext } from '../context/ProductContext.jsx';

const Header = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
        <div className="row header">
        <div className="col text-center">
            <h1 className="mb-3"> Product Inventory </h1>
            <button type="button" className="btn btn-primary">
            Count <span className="badge  mine">{products.length}</span>
            </button>
        </div>
    </div>


    </div>
  )
}

export default Header