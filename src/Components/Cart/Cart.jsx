import PropTypes from 'prop-types'
import Selection from '../Selection/Selection';
const Cart = ({cards,credit}) => {
    return (
        <div className="md:w-1/4"> 

        <h2>Credit Hour Remaining:{20-credit} </h2>

            
            <h2>Course Number: {cards.length}</h2>

            <h2>Course Name </h2>

            {
                cards.map(selection => <Selection key={selection.id} selection={selection}></Selection>)
            }

            <h2>Total Credit : {credit}</h2>

            
        </div>
    );
};

Cart.propTypes ={ 
    cards : PropTypes.array,
    credit : PropTypes.number

}

export default Cart;