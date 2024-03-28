import React, { useEffect, useState } from 'react'
import CarouselData from './Carousel'
import './Details.css'
import Navbar from '../Navbar/Navbar'
import menData from '../../Assets/men.js'
import { useParams } from 'react-router-dom'
function Details() {
    let [printDetails , setPrintDetails] = useState([]);
    let params = useParams()
    console.log(params);
    useEffect(()=>{
        let a = menData.filter((e)=>{
            return e.id === Number(params.id);
        })
        console.log(a);
        setPrintDetails(a)
    },[])

 
  return (
    
    
    
    
    <section className='detail'>
    { printDetails.length  ? <>
        <CarouselData data={printDetails}/>
        {printDetails.map((elem)=>(    
        
            <div className='detail-box'>
                <h2 className='detail-heading'>Bewakoof®</h2>
                
                <p className='product-name2'>{elem.name}</p>
                <div className='ratingBox2'>
                    <span class="material-symbols-outlined star2">star</span>
                    <span className='rating2'>{elem.rating}</span>
                </div>
        
                <div className='price2'>
                    <span className='realPrice1'>₹{elem.new_price}</span>
                    <span className='offPrice1'>₹{elem.old_price}</span>
                    <span className='discountPrice1'>{elem.off}</span>
                 
                </div>
                <p className='taxes'>inclusive of all taxes</p>
                <div className='cloth-type2'>{elem.cloth_type}</div>
                <div className='shipping-discount'>TriBe members get an extra discount of ₹30 and FREE shipping</div>
        
                <div className='cloth-size'>
                    <p className='size-heading'>SELECT SIZE</p>
                    <ul>
                        <li className='size-code'>S</li>
                        <li className='size-code'>M</li>
                        <li className='size-code'>L</li>
                        <li className='size-code'>XL</li>
                        <li className='size-code'>2XL</li>
                        <li className='size-code'>3XL</li>
                    </ul>
                </div>
        
                <div className='btn2'>
                    <button className='add-bt2'>
                        <img src='https://images.bewakoof.com/web/ic-web-head-cart.svg' alt="Cart Icon"/>
                        ADD TO BAG
                    </button>
                    <button className='wishlist-bt2'>
                        <span className="material-symbols-outlined like2">favorite</span>WISHLIST
                    </button>
                </div>
        
            </div>
        ))}
    </> : <>hello   nnnn </>
    }
</section>

    
            
    
    
    
  )
}

export default Details