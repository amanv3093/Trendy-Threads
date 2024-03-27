import React from 'react'
import CarouselData from './Carousel'
import './Details.css'
import Navbar from '../Navbar/Navbar'
function Details() {
  return (
    <>
    <Navbar />
    <section className='detail'>
        <CarouselData />
        <div className='detail-box'>
        <h2 className='detail-heading'>Bewakoof®</h2>
        
        <p className='product-name2'>Men's Black Save Our Home T-shirt</p>
        <div className='ratingBox2'>
            <span class="material-symbols-outlined star2">star</span>
            <span className='rating2'>4.6</span>
        </div>

        <div className='price2'>
            <span className='realPrice1'>₹379</span>
            <span className='offPrice1'>₹1099</span>
            <span className='discountPrice1'> 65% OFF</span>
         
        </div>
        <p className='taxes'>inclusive of all taxes</p>
        <div className='cloth-type2'>100% COTTON</div>
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
            <img src='https://images.bewakoof.com/web/ic-web-head-cart.svg'/>
            ADD TO BAG</button>
            <button className='wishlist-bt2'>
            <span className="material-symbols-outlined like2">favorite</span>WISHLIST</button>
        </div>

        </div>

    </section>
    </>
  )
}

export default Details