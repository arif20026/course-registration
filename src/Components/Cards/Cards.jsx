import  { useEffect, useState } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types'

const Cards = ({handleAddToCart}) => {
    const [cards,setCards] =useState([])

    useEffect(() => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data =>setCards(data))
    },[])
  

    return (
        <div className='md:w-2/3'>

            <h1 className='text-4xl'>Cards: {cards.length}</h1>
            
            {
                cards.map(card => <Card key={card.id} card={card} handleAddToCart={handleAddToCart}  >

                    </Card>)
            }
            
        </div>
    );

   
};

Cards.propTypes = {

    handleAddToCart: PropTypes.func,

}

export default Cards;