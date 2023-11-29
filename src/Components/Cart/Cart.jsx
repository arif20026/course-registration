import PropTypes from 'prop-types'
import Selection from '../Selection/Selection';
const Cart = ({cards,credit}) => {
    return (
        <div className="md:w-1/4 h-[500px] bg-white  ml-8 p-6 rounded-xl"> 

        <h2 className='border-b-2 border-[#1C1B1B33] pb-4 text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining:{20-credit} </h2>

            
            {/* <h2>Course Number: {cards.length}</h2> */}

            <h2 className='text-[#1C1B1B] text-xl font-bold py-4'>Course Name </h2>

            {
                cards.map(selection => <Selection key={selection.id} selection={selection}></Selection>)
            }

            <h2 className='text-[#1C1B1B] text-base font-medium  pt-4   mt-6 border-t-2 border-[#1C1B1B33]'>Total Credit Hour : {credit}</h2>

            
        </div>
    );
};

Cart.propTypes ={ 
    cards : PropTypes.array,
    credit : PropTypes.number

}

export default Cart;