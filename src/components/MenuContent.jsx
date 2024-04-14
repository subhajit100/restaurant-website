import React, { useState } from 'react'
import MenuCategories from './MenuCategories';
import MenuOptions from './MenuOptions';


const MenuContent = () => {
    const [selectedMenuCategory, setSelectedMenuCategory] = useState('PIZZA');
    const handleMenuCategoryChange = (category) => {
        setSelectedMenuCategory(category);
    }
  return (
    <div className='mt-2'>
      <MenuCategories selectedMenuCategory={selectedMenuCategory} handleMenuCategoryChange={handleMenuCategoryChange}/>
      <MenuOptions selectedMenuCategory={selectedMenuCategory}/>
    </div>
  )
}

export default MenuContent
