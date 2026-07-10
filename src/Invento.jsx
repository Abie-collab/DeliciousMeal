import "./assets/app.css"
import Header from './invento_components/Header.jsx'
import Create from './invento_components/Create.jsx'
import Products from './invento_components/Products.jsx'
import Footer from './invento_components/Footer.jsx'


const Invento = () => {
  return (
            <div className="container">
                <Header />
                <Create />
                <Products />
                <Footer />

            </div>
  )
}

export default Invento