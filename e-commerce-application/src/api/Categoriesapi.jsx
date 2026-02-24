import React from 'react'
import axios from 'axios';

const Categoriesapi = () => {
  return axios.get("https://api.escuelajs.co/api/v1/categories");
}

export default Categoriesapi