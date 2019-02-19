import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';
import {v4} from "uuid";

function ProductList(props){
  console.log(props.deleteOnClick);
  
  return (
    <div>
        {props.productList.map((product) =>
          <Product month={product.month}
          selection={product.selection}
          id={product.key}
          deleteOnButtonClick={props.deleteOnClick}
          />
            )}
    </div>
  );
}

ProductList.propTypes = {
    productList: PropTypes.array,
    month: PropTypes.string,
    selection: PropTypes.string,
    key: PropTypes.string,
    deleteOnClick: PropTypes.func
}
export default ProductList;