import React from 'react'
import Home from '../components/header/mainpage/Home'
import { FlashDeals } from '../components/flashDeals/FlashDeals'
import TopCate from '../components/top/TopCate'
import NewArrivals from '../components/newarrivals/NewArrivals'
import { Discount } from '../components/discount/Discount'

const Pages = ({productItems,cartItem,addToCart}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
{/* 
      //1.49 */}
    </>
  )
}

export default Pages
