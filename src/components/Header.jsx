import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Link to='/'>Home</Link> | <Link to='/productlist'>Products</Link> | <Link to='/schedulelist'>Schedule</Link>
    </div>
  );
}

export default Header;