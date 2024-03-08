import React, { useState } from 'react';
import './Home.css';


function Home({ text, onchange }) {

  return (
    <div className="home-form">
      <h1>Want to know your age in dog year, then Enter your age below.</h1>

      <input type="text" value={text} onChange={(e) => onchange(e)} />


    </div>
  );
}

export default Home;