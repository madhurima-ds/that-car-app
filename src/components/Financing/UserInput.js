import { useState } from "react";
import classes from "./UserInput.module.css";
import appCss from "../../../src/App.css";
import { useLocation } from "react-router-dom";
import Card from "../Card";

const initialUserInput = {
  "car-value": 10000,
  "down-payment": 0,
  "loan-amount": 0,
  "interest-rate": 6,
  duration: 5,
};

const UserInput = (props) => {
  console.log("I am in User Input Page");
  const location = useLocation();
  console.log("location", location);
  console.log("Car Price", location.state.cardetails.price);
  const car = location.state.cardetails;
  const price = location.state.cardetails.price;
  const carprice = parseFloat(
    String(location.state.cardetails.price).replaceAll(",", "")
  );
  //const carprice = parseFloat(price);
  console.log("Car Price" + { carprice });

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault(); //To pfrevent browser to reload the page instead JS do that.
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  const calculateLoanAmount = () => {
    const loanAmount = carprice - userInput["down-payment"];
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        "loan-amount": loanAmount,
      };
    });
  };

  return (
    <>
      <div>
        <p style={{ textAlign: "center", color: "blue", "font-size": "15px" }}>
          {car.year} {car.make} {car.model}
        </p>
      </div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["input-group"]}>
          <p className={appCss.p}>
            <label htmlFor="car-value">Car Value ($)</label>
            <input
              onChange={(event) =>
                inputHandler("car-value", event.target.value)
              }
              onKeyUp={calculateLoanAmount}
              //value={userInput["car-value"]}
              value={price}
              type="text"
              id="car-value"
            />
          </p>
          <p>
            <label htmlFor="down-payment">Down Payment ($)</label>
            <input
              onChange={(event) =>
                inputHandler("down-payment", event.target.value)
              }
              onKeyUp={calculateLoanAmount}
              value={userInput["down-payment"]}
              type="number"
              id="down-payment"
            />
          </p>
          <p>
            <label htmlFor="loan-amount">Loan Amount ($)</label>
            <input
              onChange={(event) =>
                inputHandler("loan-amount", event.target.value)
              }
              value={userInput["loan-amount"]}
              type="number"
              id="loan-amount"
            />
          </p>
          <p>
            <label htmlFor="interest-rate">Interest Rate (%)</label>
            <input
              onChange={(event) =>
                inputHandler("interest-rate", event.target.value)
              }
              value={userInput["interest-rate"]}
              type="number"
              id="interest-rate"
            />
          </p>
          <p>
            <label htmlFor="duration">Loan Duration (years)</label>
            <input
              onChange={(event) => inputHandler("duration", event.target.value)}
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="payment">Monthly Payment ($)</label>
            <input value={props.monthlyPayment} type="number" id="payment" />
          </p>
        </div>
        <p className={classes.actions}>
          <button
            onClick={resetHandler}
            type="reset"
            className={classes.buttonAlt}
          >
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
      <Card style={{ padding: "10px", display: "inline-flex" }}>
        <ul>
          <li>
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
            <b>Free shipping</b> . Get it by tomorrow
          </li>
        </ul>
      </Card>
    </>
  );
};

export default UserInput;
