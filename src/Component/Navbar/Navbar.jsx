// import navLogo from '../../assets/nav_log.png'
import { NavLink, useParams } from 'react-router-dom'
import './Navbar.css'
import { UseItem } from '../../Context/Context'
import img1 from '../../Assets/f58c9d0d-70a6-4aa6-83b2-0de58d7ec873-removebg-preview.png'
function Navbar() {
    let {CheckPage} = UseItem();
   console.log(CheckPage);
  return (
    
    <>
    <header>
        <div className='header-box1'>
            <div className='nav-logo'>
            <NavLink to='/' style={{textDecoration:'none' , color:'black', fontSize: '17px',
    fontWeight:' 800',
    letterSpacing: '1px'}}><span>T</span>REN<span style={{fontSize: '26px', padding:'0px 2px'}}>:</span><span style={{fontSize: '20px'}}>D</span>Y THREADS</NavLink> 
            </div>
            <ul>
                <li className='list1'><NavLink to='/men'>MEN</NavLink> </li>
                <li className='list1'><NavLink to='/men'>WOMEN</NavLink> </li>
                <li className='list1'><NavLink to='/men'>CHILDREN</NavLink> </li>
            </ul>
        </div>

        <div className='header-box2'>

            <div className='nav-search'>
            <span className="material-symbols-outlined search-icon">search</span>
                <input type='text'placeholder='Search by product,category or collection'/>
            </div>
        
      
            <div className='nav-line'>
                |
            </div>
           
            <div className='nav-login'>
            <NavLink to='/login'>Login</NavLink>
            </div>
            
            <div className='nav-like'>
            <NavLink to='/wishlist'>
                <span style={{color:'black'}} className="material-symbols-outlined like">favorite</span>
            </NavLink>
            
            </div>

            <div className='nav-cart'>
            <span className="material-symbols-outlined cart">shopping_bag</span>
            </div>
            
            
        </div>
    </header>

    
    </>
  )
}

export default Navbar