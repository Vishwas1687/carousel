import React from 'react';
import './App.css';
import ImageSlider from './ImageSlider.js';
function App() {
  return (
   <div className="wrapper">
      <div className='title'>
        <h1>Carousel</h1>
      </div>
      <div className='image-container'>
      <ImageSlider/>
      </div>
   </div>
  );
}

export default App;
