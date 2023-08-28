import { useState } from "react";
import UserInput from "../components/Financing/UserInput";
import { useLocation } from "react-router-dom";

const PaymentCalculator = (props) => {
  console.log("I am in Payment Calculator Page");
  const location = useLocation();
  console.log("location", location);
  console.log("Car Price", location.state.cardetails.price);

  const [userInput, setUserInput] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    if (userInput) {
      const loanAmount = userInput["loan-amount"];
      const interestRate = userInput["interest-rate"];
      const duration = userInput["duration"];

      function percentageToDecimal(percent) {
        return percent / 12 / 100;
      }
      function yearsToMonths(year) {
        return year * 12;
      }

      console.log(
        percentageToDecimal(interestRate * loanAmount) /
          (1 -
            Math.pow(
              1 + percentageToDecimal(interestRate),
              -yearsToMonths(duration)
            ))
      );

      setMonthlyPayment(
        percentageToDecimal(interestRate * loanAmount) /
          (1 -
            Math.pow(
              1 + percentageToDecimal(interestRate),
              -yearsToMonths(duration)
            ))
      );
    }
    console.log(monthlyPayment);
    return monthlyPayment;
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", color: "blue" }}>
          Finance Calculator
        </h2>
        <UserInput
          onCalculate={calculateHandler}
          monthlyPayment={parseFloat(monthlyPayment.toFixed(2))}
        />

        {!userInput && (
          <p style={{ textAlign: "center" }}>
            No monthly payment calculated yet.
          </p>
        )}
      </div>
    </>
  );
};

export default PaymentCalculator;

/*  <UserInput
          onCalculate={calculateHandler}
          monthlyPayment={parseFloat(monthlyPayment.toFixed(2))}
        />
        {!userInput && (
          <p style={{ textAlign: "center" }}>
            No monthly payment calculated yet.
          </p>
        )}
*/
