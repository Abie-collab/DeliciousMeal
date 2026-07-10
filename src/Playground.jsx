import bluescreen from "./assets/bl.jpg"
import Header from "./playground_components/Header"
import Content from "./playground_components/Content"
import Footer from "./playground_components/Footer"

//using hook useState(), which needs to be imported from react
import { useState } from "react"

const Playground = () => {
    // let's assume we sent a request to an API and got back appname
    var appname = "Blogger";
     const [count, setCount] = useState(0)  //count is the container,setCount the only one that can change count
    // var count = 0;
    var fruits = ['mango','banana','apple','pear'];
    var products = [
            {
                id : 1,
                name : "Mouse",
                price: 2000
            },

            {
                id : 2,
                name : "Keyboard",
                price: 3000
            },

            {
                id : 3,
                name : "Phone",
                price: 5000
            },
    ];
 
    // function sayHello(){
    //     alert("Hello Mr Akpan")
    // }


  return (
    <div>
        <Header app={appname} ct ={count} />
        <Content count={count} fruits ={fruits} products={products} updater={setCount} />
        <Footer />
        {/*how to display image inside the public foder  */}
        <img src="/assets/img/bl.jpg" alt="picture" className="img-fluid"/>
         {/*how to display image inside the src foder, it has to be imported first and then dispaly  */}
         <img src="{bluescreen}" alt="" />
         
    </div>
  )
}

export default Playground