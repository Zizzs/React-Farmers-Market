import React from 'react';
import PropTypes from 'prop-types';


function Product(props){
  return (
    <div>
      <h3>{props.month}</h3>
      {props.selection.map((name) => 
        <p>{name} <button onClick={() => props.deleteOnButtonClick(props.id, name)}>Delete</button></p>)}
      < hr/>
    </div>
  );
}

Product.propTypes = {
    month: PropTypes.string.isRequired,
    selection: PropTypes.array,
    id: PropTypes.string,
    deleteOnButtonClick: PropTypes.func
};
export default Product;