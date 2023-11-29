import PropTypes from 'prop-types'
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";



const Card = ({card,handleAddToCart,handleAddCredit}) => {

    const {image,course_name,details,price,credit} = card

    return (
        <div className='border-2 border-solid border-red-600  bg-white rounded-xl'>
            <img src={image} alt=""  className='w-full h-52 p-4 rounded-lg'/>

            <h2 className='text-[#1C1B1B] text-xl font-semibold pl-4'>{course_name}</h2>

            <p className='p-4 text-[#1C1B1B99]'>{details}</p>

            <div className='flex justify-between px-4 '>
                <div className='flex items-center'>
                    <p><FiDollarSign/></p>
                    <p className='px-3'>Price :{price}</p>
                </div>

                <div className='flex items-center'>
                    <p><IoBookOutline /></p>
                    <p className='px-3'> Credit :{credit}hr</p>
                </div>
                
                
            </div>


            <button onClick={() => {handleAddToCart(card);handleAddCredit(credit)}} 

            
            
            className='bg-[#2F80ED] text-[#FFF]  rounded-lg w-[333px] h-[40px] m-4  '>Select</button>

        
            
        </div>
    );
};

Card.propTypes ={
    card: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func ,
    handleAddCredit : PropTypes.func
}

export default Card;