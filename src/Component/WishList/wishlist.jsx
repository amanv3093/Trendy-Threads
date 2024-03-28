import React from 'react'
import './wishlist.css'
function wishlist() {
  return (
    <section className='wishlist'>
        <div className='wishlist-box'>
        <div className='wishlist-type'>
                <span className='wishlist-type-box'>All</span>
                <span className='wishlist-type-box'>T-Shirt</span>
                <span className='wishlist-type-box'>Shirt</span>
            </div>
        <div className='wishlist-details-box'>
            
            <div className='wishlist-card'>
                <div className='card2'>
                <div className='card-img2'>
                    <img src='https://images.bewakoof.com/t320/men-s-multicolor-aop-all-over-printed-oversized-shirt-624408-1709558900-1.jpg'/>
        
                </div>
        
                <div className='card-details2'>
                    <div className='item-name2'>
                    <p>Men's Multicolor All Over Printed OversizMen...</p>
                    
                </div>

                <div className='wishlist-price'>
                    <p className='wishlist-realPrice'>₹999</p>
                    <p className='wishlist-oldPrice'>₹1899</p>
                    <p className='wishlist-offPrice'>47% OFF</p>

                </div>
    
                   
                    
                    
                    
                </div>

                <div className='wishlist-btn'>
                <button className='w-btn'><img style={{width:'15px',height:'15px'}} src='https://images.bewakoof.com/web/addtocart.svg'/>ADD TO BAG</button>

                </div>

                </div>
            </div>
         
        </div>

        
            

        </div>
        
        
    </section>
  )
}

export default wishlist
