import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home";
import SearchAndFilter from "./Pages/SearchAndFilter";
import Financing from "./Pages/Financing";
import PaymentCalc from "../src/Pages/PaymentCalculator";
import Inventory from "./Pages/Inventory";
import ErrorPage from "./Pages/ErrorPage";
import DetailsPage from "./Pages/DetailsPage";
import HelpCenter from './Pages/HelpCenter';

import classesCss from "./App.css";

import carTitleLogoPNG from "../src/assets/car.svg";
import hondaAccord from "../src/assets/honda-accord-blue.png";
import teslaModelS from "../src/assets/2018-tesla-modelS.png";
import teslaWhite from "../src/assets/teslaWhite.png";
import bmwBlue from "../src/assets/bmw-blue.png";
import bmwGold from "../src/assets/bmw-gold.png";
import audiWhite from "../src/assets/Audi-white.png";
import audiGold from "../src/assets/audi-gold.png";
import hondaCivic from "../src/assets/hondaCivic.png";
import pageNotFound from "../src/assets/404.jpg";

import Layout from "../src/components/Layout";

function App() {
  const companyName = "that car place";

  const faqList = [
    {id: 'faq1', question: 'How does That Car App determine the value of my vehicle?', answer: 'We combine the vehicle details you provide, such as options, accident history, and mileage, along with data from service records, trusted pricing guides, and our own market analysis. We analyze hundreds of data points to create a real offer, personalized for you. You’ll receive the strongest offer we can give based on our analysis of your vehicle’s value and current auto market conditions.'},
    {id: 'faq2', question: 'What documents do I need to sell my car to That Car App?', answer: 'In most cases, we ask for photos of three items: your ID, your vehicle’s title, and odometer. We tailor what we request based on considerations unique to you and your car and don’t ask for anything we don’t need. We’ll request documents unique to your situation, like if you have a loan, a lease, or multiple title owners. We make it easy and secure to send documents right from your mobile phone or laptop. And we’re here to answer any questions you have along the way.'},
    {id: 'faq3', question: 'If I sell my car to That Car App, how and when will I be paid?', answer: 'That Car App will pay you for your car at your pickup or drop-off appointment. We’ll either hand you a printed check or initiate payment via an ACH direct deposit into your checking or savings account (ACH transfers normally take between 2-5 business days). The appointment is fast – we simply confirm the basic details about your vehicle and complete final sale documents – ensuring you get paid as quickly as possible.'},
    {id: 'faq4', question: 'How does That Car App handle options for pickup and drop-off?', answer: 'Depending on your location, we offer home appointments and meet-ups. Our appointments are fast and easy - we will take a quick look at your car to confirm the vehicle details, pass you a couple of papers to sign, and then pay you on the spot! There may be an additional fee for home pick up.'},
    {id: 'faq5', question: 'Can I sell my vehicle to That Car App without buying a car from That Car App?', answer: 'Yes! You can absolutely sell us your car, even if you’re not ready to buy another car now. It’s an easy, online process to sell or trade-in your vehicle. We buy thousands of cars each week from customers like you.'},
  ];

  const inventoryList = [
    {
      id: "1",
      img: hondaAccord,
      make: "Honda",
      model: "Accord",
      year: "2022",
      type: "Long-range",
      mileage: "35,000",
      price: "37,999",
      color: "blue",
    },
    {
      id: "2",
      img: teslaModelS,
      make: "Tesla",
      model: "Model S",
      year: "2023",
      type: "Electric",
      mileage: "22,000",
      price: "52,999",
      color: "red",
    },
    {
      id: "3",
      img: teslaWhite,
      make: "Tesla",
      model: "Model S",
      year: "2018",
      type: "Electric",
      mileage: "42,000",
      price: "32,999",
      color: "white",
    },
    {
      id: "7",
      img: bmwBlue,
      make: "BMW",
      model: "X3",
      year: "2021",
      type: "sDrive30i",
      mileage: "2,000",
      price: "45,999",
      color: "blue",
    },
    {
      id: "5",
      img: bmwGold,
      make: "BMW",
      model: "3 Series",
      year: "2023",
      type: "328i Gran Turismo Xdrive",
      mileage: "42,000",
      price: "22,999",
      color: "gold",
    },
    {
      id: "6",
      img: audiWhite,
      make: "Audi",
      model: "TT",
      year: "2014",
      type: "Quatro Premium",
      mileage: "82,000",
      price: "12,999",
      color: "white",
    },
    {
      id: "4",
      img: audiGold,
      make: "Audi",
      model: "eTron",
      year: "2023",
      type: "Chronos",
      mileage: "34,500",
      price: "62,999",
      color: "gold",
    },
    {
      id: "8",
      img: hondaCivic,
      make: "Honda",
      model: "Civic",
      year: "2023",
      type: "Sedan LX",
      mileage: "1000",
      price: "25,045",
      color: "red",
    },
  ];

  const [inventory, setInventory] = useState(inventoryList);

  const updateInventoryHandler = (updatedInventory) => {
    console.log(updatedInventory);
    setInventory(updatedInventory);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          carTitle={companyName}
          carTitleLogo={carTitleLogoPNG}
          cssClass={classesCss}
          text1="SEARCH CARS"
          text2="ADD INVENTORY"
          text3="FINANCING"
          text4="SIGN-IN"
          link1="/search"
          link2="/inventory"
          link3="/financing"
          link4="/"
          link5="/paymentcalculator"
        />
      ),
      errorElement: <ErrorPage errorImg={pageNotFound} />,
      children: [
        {
          path: "/",
          element: <Home inventoryList={inventory} carTitle={companyName} />,
        },
        {
          path: "/financing",
          element: (
            <Financing carTitle={companyName} inventoryList={inventory} />
          ),
        },
        {
          path: "/paymentcalculator",
          element: <PaymentCalc carTitle={companyName} />,
        },
        {
          path: "/search",
          element: (
            <SearchAndFilter carTitle={companyName} inventoryList={inventory} />
          ),
        },
        {
          path: "/details/:id",
          element: (
            <DetailsPage carTitle={companyName} inventoryList={inventory} />
          ),
        },
        {
          path: "/inventory",
          element: (
            <Inventory
              onUpdate={updateInventoryHandler}
              carTitle={companyName}
              inventoryList={inventory}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
