import React from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../hooks/useCart';



function Header(props) {
  const { totalPrice} = useCart();


  
    return(
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
    <div className="d-flex align-center">
 <img width={40} height={40} src="/img/logo.png"/>
<div>
 <h3 className="text-uppercase"> React Sneakers</h3>
 <p className="opacity"> Магазин лучших кроссовок</p>
 </div>
</div>
</Link>

<ul className="d-flex">
 <li onClick={props.onClickCart} className="mr-30 cu-p" >
   <img width={18} height={12.27} src="/img/корзина2.svg"/>
 <span>{totalPrice} руб.</span>
 </li>

<li className="mr-20 cu-p">
 <Link to ="/favorites">
  <img width={20} height={20} src=" /img/heart.svg" alt="Закладки"/> 
  </Link>
</li>

<li className=" cu-p">
<Link to ="/orders">
  <img width={30} height={30} src=" /img/user4.png" alt="Пользователь"/> 
  </Link>
</li>
</ul>
</header> 
 );

}

export default Header;
