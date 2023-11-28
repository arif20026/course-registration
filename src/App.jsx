
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const [cards, setCards] = useState([])
  const [credit, setCredit] = useState(0)

  const handleAddToCart = card => {
    if (!cards.includes(card)) {

      // console.log(card.id)

      const newCards = [...cards, card]
      setCards(newCards)

    }

    
    else {
      setCards(cards)
      toast.error('Course already added!', {
        position: 'top-right',
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });

    }
  }

    
  const handleAddCredit = nwCredit => {
    
    const newCredit = credit + nwCredit

    if(newCredit<=20){

      setCredit(newCredit)

    }
    else{
      setCredit(20)
      toast.error('Can not add more than 20 credit!', {
        position: 'top-right',
        autoClose: 2000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        
      });

    }
    
   
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

        <ToastContainer />

      </div>



    </>




  );
};

export default App;