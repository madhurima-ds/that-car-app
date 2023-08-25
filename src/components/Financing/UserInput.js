import { useState } from "react";
import classes from "./UserInput.module.css";
import appCss from "../../../src/App.css";

const initialUserInput = {
  "car-value": 10000,
  "down-payment": 1000,
  "loan-amount": 9000,
  "interest-rate": 7,
  duration: 12,
};

const UserInput = (props) => {
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
    const loanAmount = userInput["car-value"] - userInput["down-payment"];
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        "loan-amount": loanAmount,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p className={appCss.p}>
          <label htmlFor="car-value">Car Value ($)</label>
          <input
            onChange={(event) => inputHandler("car-value", event.target.value)}
            onKeyUp={calculateLoanAmount}
            value={userInput["car-value"]}
            type="number"
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
      </div>
      <div className={classes["input-group"]}>
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
      </div>
      <div className={classes["input-group"]}>
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
  );
};

export default UserInput;
