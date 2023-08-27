import Card from "../Card";
import "./FinanceInvOutput.css";
import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

const InventoryOutput = (props) => {
  const [isPayment, setIsPayment] = useState(true);
  const [car, setCar] = useState({});
  const navigate = useNavigate();

  const invList = props.iList;

  const onClickHandler = (car) => {
    console.log("car print before setting status");
    console.log({ car });
    setCar(car);
    setIsPayment(false);
  };
  console.log("car print after setting status");
  console.log({ car });
  if (!isPayment) {
    // return <Navigate to="/paymentcalculator"  />;
    navigate("/paymentcalculator", {
      state: {
        cardetails: car,
        message: "Message from FinanceInvOutput component",
      },
    });
  }

  return invList.map((car) => (
    <>
      <div className="inventoryOutput">
        <Card onClick={() => onClickHandler(car)}>
          <ul>
            <li>
              {" "}
              <img src={car.img} alt={car.id}></img>
            </li>
            <li>
              <text
                style={{
                  color: "gray",
                  fontSize: "11px",
                  textTransform: "uppercase",
                }}
              >
                {props.name} CERTIFIED
              </text>
            </li>
            <li>
              <text style={{ fontSize: "20px", fontWeight: "bolder" }}>
                {car.year} {car.make} {car.model}
              </text>{" "}
            </li>
            <li>
              <span>
                {car.type} <b>.</b> {car.mileage} miles
              </span>
            </li>
            <li>
              <h2>${car.price}</h2>
            </li>
            <hr></hr>
            <li style={{ "font-size": "13px" }}>
              {" "}
              <b>Free shipping</b> . Get it by tomorrow
            </li>
          </ul>
        </Card>
      </div>
    </>
  ));
};

export default InventoryOutput;
/*<button onClick={() => setIsPayment(false)}>Payment Calculator</button>*/
