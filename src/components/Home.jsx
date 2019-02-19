import React from 'react';
import local from '../assets/images/local.jpeg';


function Home(){
  return (
    <div>
       <style jsx> {`
    h1 {
      text-align: center;
      font-size: 45px;
    }
    `}</style>
      <h1> Farmers Market</h1>
      <img src={local} />
    </div>
  );
}

export default Home;