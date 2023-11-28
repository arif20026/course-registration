import PropTypes from 'prop-types'
const Card = ({card,handleAddToCart,handleAddCredit}) => {

    const {image,course_name,details,price,credit} = card

    return (
        <div>
            <img src={image} alt=""  className='w-full h-52'/>

            <h2>{course_name}</h2>

            <p>{details}</p>

            <div className='flex justify-between'>
                <p>Price :{price}</p>
                <p>Credit :{credit}</p>
            </div>


            <button onClick={() => {handleAddToCart(card);handleAddCredit(credit)}} 

            
            
            className='bg-[#2F80ED]'>Select</button>

        
            
        </div>
    );
};

Card.propTypes ={
    card: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func ,
    handleAddCredit : PropTypes.func
}

export default Card;