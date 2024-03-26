
import { UseItem } from '../../Context/Context'
import './Home.css'


function Home() {
  
  let {total} = UseItem()
  console.log(total);

  return (
    <div className='hero-section'>
    <img src='https://images.bewakoof.com/uploads/grid/app/Mad-summer-SALE-SelectionPage-Desktop-MEN-slice-1710830587.jpg' width='50%'/>
    <img src='https://images.bewakoof.com/uploads/grid/app/Mad-summer-SALE-SelectionPage-Desktop-WOMEN-slice-1710830588.jpg' width='50%'/>

    </div>
  )
}

export default Home