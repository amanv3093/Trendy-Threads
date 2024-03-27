// import navLogo from '../../assets/nav_log.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <header>
        <div className='header-box1'>
            <div className='nav-logo'>
            <NavLink to='/'><img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'/></NavLink> 
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
                Login
            </div>
            
            <div className='nav-like'>
            <span className="material-symbols-outlined like">favorite</span>
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