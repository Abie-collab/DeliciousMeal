import Header from "./Header"
import Banner from "./Banner"
import Content from "./Content"
import Table from "./Table"
import Footer from "./Footer"

function Layout() {
    return(
        <div className="container">
           <div className="row">
              <div className="col-12">
                <Header />
              </div>
           </div>
              <div className="row">
                <div className="col-12">
                  <Banner />
                </div>
              </div>
             <div className="row">
                  <Content />   
             </div>
                <div className="row">
                  <Table />   
             </div>
             
             <div className="row">
        
                  <Footer />
               
              </div>
        </div>
    )
    // const num = 5
    // return <div>
    //     <h1>My Page</h1>
    //     <p>This is the content of my page {num}</p>
    // </div>
}

export default Layout