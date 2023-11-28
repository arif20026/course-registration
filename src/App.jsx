
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

const App = () => {

  const [cards, setCards] =useState([])
  const [credit, setCredit] =useState(0)

  const handleAddToCart= card => {
    const newCards =[...cards,card]
    setCards(newCards)
  }

  const handleAddCredit = nwCredit =>{
    const newCredit = credit + nwCredit
    setCredit(newCredit)
  }

  
  return (

    <>

      <Header ></Header>

      <div className="md:flex mx-16">

      <Cards 
      handleAddToCart={handleAddToCart}
       handleAddCredit={handleAddCredit}>

       </Cards>
      <Cart cards={cards} credit={credit}></Cart>

      </div>
      


    </>




  );
};

export default App;