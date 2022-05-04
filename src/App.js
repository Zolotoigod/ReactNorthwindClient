//import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Products from './components/Products';
import Categories from './components/Categories';
//import { lazy } from 'react';

//const Home = lazy(() => import('./components/Home'));
//const Products = lazy(() => import('./components/Products'));
//const Categories = lazy(() => import('./components/Categories'));


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/products' element={ <Products/> } />
          <Route path='/categories' element={ <Categories/> } />
          <Route path='*' element={<h1>Resurse not found</h1>}/>
        </Routes>
      <h1>I am allive!!!</h1>
    </div>
    </BrowserRouter>   
  );
}

export default App;
