import React from 'react'

const CategoryCard = ( {category} ) => {
  return (
    <div className='category-card'>
        <img src={category.image} alt="not  found" />
        <h5>{category.name}</h5>
    </div>
  )
}
export default CategoryCard