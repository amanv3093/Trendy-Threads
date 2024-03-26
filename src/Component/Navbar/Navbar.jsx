// import navLogo from '../../assets/nav_log.png'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <header>
        <div className='header-box1'>
            <div className='nav-logo'>
                <img src='https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg'/>
            </div>
            <ul>
                <li className='list1'>MEN</li>
                <li className='list1'>WOMEN</li>
                <li className='list1'>CHILDREN</li>
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