import PropTypes from 'prop-types'
const Selection = ({selection}) => {

    const {course_name} = selection
    return (
        <div>

            <h3>{course_name}</h3>


            
        </div>
    );
};

Selection.propTypes ={

    selection : PropTypes.object

}

export default Selection;