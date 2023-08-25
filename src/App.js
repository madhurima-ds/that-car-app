import React, { useState } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from '../src/Pages/Home';
import SearchAndFilter from './Pages/SearchAndFilter';
import Financing from '../src/Pages/Financing';
import Inventory from './Pages/Inventory';
import ErrorPage from './Pages/ErrorPage';

import classesCss from './App.css';

import carTitleLogoPNG from '../src/assets/car.svg';
import hondaAccord from '../src/assets/honda-accord-blue.png'
import teslaModelS from '../src/assets/2018-tesla-modelS.png';
import teslaWhite from '../src/assets/teslaWhite.png';
import bmwBlue from '../src/assets/bmw-blue.png';
import bmwGold from '../src/assets/bmw-gold.png';
import audiWhite from '../src/assets/Audi-white.png';
import audiGold from '../src/assets/audi-gold.png';
import hondaCivic from '../src/assets/hondaCivic.png';
import pageNotFound from '../src/assets/404.jpg';

import Layout from '../src/components/Layout';

function App() {
  const companyName = 'that car place';

  const inventoryList = [
    {id:'1', img: hondaAccord, make: 'Honda', 'model': 'Accord', year: '2022', type: 'Long-range', mileage: '35,000', price: '37,999', color: 'blue'}, 
    {id:'2', img: teslaModelS, make: 'Tesla', 'model': 'Model S', year: '2023', type: 'Electric', mileage: '22,000', price: '52,999', color:'red'},
    {id:'3', img: teslaWhite, make: 'Tesla', 'model': 'Model S', year: '2018', type: 'Electric', mileage: '42,000', price: '32,999', color: 'white'},
    {id:'7', img: bmwBlue, make: 'BMW', 'model': 'X3', year: '2021', type: 'sDrive30i', mileage: '2,000', price: '45,999',color:'blue'},
    {id:'5', img: bmwGold, make: 'BMW', 'model': '3 Series', year: '2023', type: '328i Gran Turismo Xdrive', mileage: '42,000', price: '22,999', color:'gold'},
    {id:'6', img: audiWhite, make: 'Audi', 'model': 'TT', year: '2014', type: 'Quatro Premium', mileage: '82,000', price: '12,999',color:'white'},
    {id:'4', img: audiGold, make: 'Audi', 'model': 'eTron', year: '2023', type: 'Chronos', mileage: '34,500', price: '62,999',color:'gold'},
    {id:'8', img: hondaCivic, make: 'Honda', 'model': 'Civic', year: '2023', type: 'Sedan LX', mileage: '1000', price: '25,045',color:'red'}];

  const [inventory, setInventory] = useState(inventoryList);

  const updateInventoryHandler = (updatedInventory) => {
    console.log("In App.js");
    console.log(updatedInventory);
    setInventory(updatedInventory);
  }

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Layout carTitle={companyName} carTitleLogo={carTitleLogoPNG} cssClass={classesCss} 
        text1='SEARCH CARS' text2='ADD INVENTORY' text3='FINANCING' text4='SIGN-IN'
        link1='/search' link2='/inventory' link3='/financing' link4='/'/>,
      errorElement: <ErrorPage errorImg={pageNotFound}/>,
      children:  [
        {path:"/", element: <Home inventoryList={inventory} carTitle={companyName}/>},
        {path: "/financing", element: <Financing/>},
        {path: "/search", element: <SearchAndFilter carTitle={companyName} inventoryList={inventory}/>},
        {path: "/inventory", element: <Inventory onUpdate={updateInventoryHandler} carTitle={companyName} inventoryList={inventory}/>}
      ]
    }
   ]); 
  return (<RouterProvider router={router}/>);
}

export default App;
