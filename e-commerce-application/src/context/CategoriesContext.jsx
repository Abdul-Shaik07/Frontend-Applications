/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'
import Categoriesapi from '../api/Categoriesapi';
import { useEffect } from 'react';


// create Context
const CategoriesContext = createContext();

export const useCategories = () => {
    return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCategoreis = async () => {
        try {
            setLoading(true);
            const resultData = await Categoriesapi();
            setCategories(resultData.data)
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError("No categories found");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCategoreis();
    }, [])

    return (
        <CategoriesContext.Provider 
            value={{
                categories,
                loading,
                error
            }}>
            {children}
        </CategoriesContext.Provider>
    
    )
}
