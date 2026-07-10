import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Blogger from './Blogger.jsx'
import Playground from './Playground.jsx'
import Banking from './Banking.jsx'
import Invento from './Invento.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import Meal from './Meal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      {/* <App /> */}
      {/* <Layout /> */}
      {/* a root component for blogger app */}
      {/* <Blogger /> */}
      {/* <Playground /> */}
      {/* <Banking /> */}
      {/* <ProductProvider>
       <Invento />
    </ProductProvider> */}
      <Meal />
  </StrictMode>,
)
