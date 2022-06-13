import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
import NavMenu from './components/NavMenu';
import Blog from './components/Blog';
import Error from './components/Error';


function App() {
  const mainPath = 'https://localhost:5001/';
  return (
    <BrowserRouter>
    <div className='container'>
      
      <NavMenu/>

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/products' element={ <Products mainPath={mainPath}/> } />
        <Route path='/categories' element={ <Categories mainPath={mainPath} /> } />
        <Route path='/blog' element={<Blog />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </div>
    </BrowserRouter>   
  );
}

export default App;
