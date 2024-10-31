import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';



const showOrders =(props) =>{
  let summa = 0
  props.orders.forEach(el=> summa+= Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map((el) => (
        <Orders onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
}
const showNothing =() =>{
  return(<div className='empty'>
    <h2>Нет товаров</h2></div>)
}


export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'> House Staff</span>
            <ul className='nav'>
              <li>Контакты</li>
              <li>О нас</li>
              <li>Кабинет</li>
            </ul>
            <FaShoppingCart 
          onClick={() => setCartOpen(!cartOpen)} 
          className={`shop-cart-button ${cartOpen ? 'active' : ''}`} 
        />
        {cartOpen && (
         <div className='shop-cart'>
         {props.orders.length > 0?
         showOrders(props): showNothing()}

         </div>

        )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
