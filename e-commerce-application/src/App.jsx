
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Categories from './components/categories/Categories';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { CategoriesProvider } from './context/CategoriesContext';
import Home from './components/home/home';


function App() {

  return (
    <>
      <BrowserRouter>
        <CategoriesProvider>
          {/* Always visible */}
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
          </Routes>
        </CategoriesProvider>
      
      </BrowserRouter>
    </>
  )
}

export default App
