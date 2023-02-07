import React,{useState} from 'react';
import data from './data.js';
import './ImageSlider.css';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa';

  const slidestyles={
        height:"100%",
        width:"100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
const ImageSlider =()=>{
    const [images,setImages]=useState(data)
    const [imageId,setImageId]=useState(0)
     
    const handleNext=()=>{
        if(imageId===images.length-1)
        setImageId(0)
        else
        setImageId((prevImageId)=>prevImageId+1)
    }
  
      const handlePrevious=()=>{
        if(imageId===0)
        setImageId(images.length-1)
        else
        setImageId((prevImageId)=>prevImageId-1)
    }

    const handleDotClick=(id)=>{
        setImageId(id)
    }

     return (
            <div className="image-slider">
                <div>
                  <span className='arrow-left' onClick={handleNext}><FaChevronLeft/></span>
                  <span className='arrow-right' onClick={handlePrevious}><FaChevronRight/></span>
                </div>
                <div style={{...slidestyles,backgroundImage:`url(${images[imageId].url})`}}> </div>
                <div className='dots'>
                    {images.map((image,index)=>{
                        return <span key={index} className='dot' onClick={()=>handleDotClick(index)}>.</span>
                    })}
                </div>
            </div>
     )
}
export default ImageSlider