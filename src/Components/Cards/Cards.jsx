import { useEffect, useState } from "react";
import Card from '../Card/Card'
import PropTypes from 'prop-types'

const Cards = ({ handleAddToCart, handleAddCredit }) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('cards.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="md:w-3/4 md:grid md:grid-cols-3 gap-8">

            {/* <h1>Cards:{cards.length}</h1> */}


            {
                cards.map(card => <Card
                    key={card.id}
                    card={card}
                    handleAddToCart={handleAddToCart}
                    handleAddCredit={handleAddCredit}
                ></Card>)
            }

        </div>
    );
};

Cards.propTypes = {
    handleAddToCart: PropTypes.func,
    handleAddCredit: PropTypes.func
}

export default Cards;