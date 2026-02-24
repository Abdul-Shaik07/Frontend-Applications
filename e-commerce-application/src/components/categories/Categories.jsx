import React from 'react'
import { useCategories } from '../../context/CategoriesContext'
import CategoryCard from './CategoryCard';
import './Categories.css';

const Categories = () => {
    const {categories, loading, error} = useCategories();
    if(error) {
        return <h3> {error} </h3>
    }

    if(loading) {
        return <h1> {loading} </h1>
    }
  return (
    <div>
        <h3 className='shop-by-category'>Shop by category</h3>
        <div className="categories-container">
            {
                categories.slice(0,4).map((category) => (
                    <CategoryCard key = {category.id} category = {category} className="category-card"/>
                ))
            }
        </div>

    </div>
  )
}

export default Categories