import React, { useState } from 'react'
import { cartNumber } from '../atoms/cart'
import { useRecoilState } from 'recoil'


const Home = () => {
  let [cart, setCart] = useRecoilState(cartNumber);
 
  return (
    <div>
      <h2>Cart:{cart}</h2>
      <button onClick={()=>setCart((prev) => prev+1)}>Add to cart</button>
    </div>
  )
}

export default Home