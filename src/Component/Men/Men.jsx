import React from 'react'
import './Men.css'
import Navbar from '../Navbar/Navbar'
import menData from '../../Assets/men.js'
function Men() {
    console.log(menData);
  return (
    <>
    <Navbar />
    <main>
    
    {menData.map((element)=>(
        <div className='card'>
            <div className='card-img'>
                <img src={element.image[0].photo1}/>
    
            </div>
    
            <div className='card-details'>
                <div className='item-name'>
                <p>{element.name}</p>
                <span className="material-symbols-outlined like">favorite</span>
            </div>

               
                
                <div className='price'>
                    <span className='new-price'>₹{element.new_price}</span>
                    <span className='off-price'>₹{element.old_price}</span>

                </div>
                <div className='cloth_type'>{element.cloth_type}</div>
            </div>
            </div>
        
    ))}
        
</main>
    
     
    
    </>
  )
}

export default Men