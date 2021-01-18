import React from 'react';
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import PropTypes from 'prop-types';

const Rating = ({value, text, color}) => {
    
    return (
        <div className='rating'>
        <span style={{color}}>
            {
               value >= 1 ? <FaStar /> 
             : value >= 0.5 ? <FaStarHalfAlt />
             : <FaStar />
            }            
        </span>
        <span style={{color}}>
            {
               value >= 2 ? <FaStar /> 
             : value >= 1.5 ? <FaStarHalfAlt />
             : <FaStar />
            }            
        </span>
        <span style={{color}}>
            {
               value >= 3 ? <FaStar /> 
             : value >= 2.5 ? <FaStarHalfAlt />
             : <FaStar />
            }            
        </span>
        <span style={{color}}>
            {
               value >= 4 ? <FaStar /> 
             : value >= 3.5 ? <FaStarHalfAlt />
             : <FaStar />
            }            
        </span>
        <span style={{color}}>
            {
               value >= 5 ? <FaStar /> 
             : value >= 4.5 ? <FaStarHalfAlt />
             : <FaRegStar />
            }            
        </span>
        <span> {text && text}</span>
        </div>
    )
}

//Default Color
Rating.defaultProps = {color: '#f8e825'}

//Default variable types
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}

export default Rating