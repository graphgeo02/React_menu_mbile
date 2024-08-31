import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import '../nav/nav.scss';
import { navGroup1 } from './navData';
import { navGroup2 } from './navData';
import Logo from '../logo/Logo';
import { useRecoilValue } from 'recoil';
import { cartNumber } from '../atoms/cart';


const Nav = () => {
  function handleToggle(){
    setToggle(prev => !prev)
  }

  useEffect(()=>{
  window.addEventListener('click', (e)=>{
    // console.log(e.target.className)
    if(!String(e.target.className).includes('Menu')){
           setToggle(false)
    }
  })
  }, [])
  let cart = useRecoilValue(cartNumber);
  let [toggle, setToggle] = useState(false);
  return (
    <div id='Nav'>
        {/*Router step3 */}
        {/* <h2>Nav</h2> */}
        <ul>
                <li>
                {""}
                <Link to='/#'>Logo</Link>{""}
                </li>

                {/* <li>
                {""}
                <Link to='/'>Home</Link>{""}
                </li>

                <li>
                {""}
                <Link to='/shop'>Shop</Link>{""}
                </li>

                <li>
                {""}
                <Link to='/about'>About</Link>{""}
            </li> */}
              <li className='group1'>
                {
                     navGroup1.map(each=> (
                      <Link key={each.id} to={each.path}>{each.text}</Link>
                     ))
                }
              </li>
              <li className='group2'>
                {
                     navGroup2.map(each=> (
                      <Link  key={each.id}to={each.path}>{each.text}</Link>
                     ))
                }
              <span>Cart [{cart}]</span>
              </li>
              <li onClick={(e)=> handleToggle()} className='Menu'>
                &#9776;
              </li>

        </ul>
        <div  style={{display: toggle? 'block': 'none' }}className="popup">
        <li className='group1'>
                {
                     navGroup1.map(each=> (
                      <Link onClick={(e)=> handleToggle()} key={each.id} to={each.path}>{each.text}</Link>
                     ))
                }
              </li>
              <li className='group2'>
                {
                     navGroup2.map(each=> (
                      <Link onClick={(e)=> handleToggle()} key={each.id}to={each.path}>{each.text}</Link>
                     ))
                }
              <span>Cart [{cart}]</span>
              </li>        
        </div>
    </div>
  )
}

export default Nav;