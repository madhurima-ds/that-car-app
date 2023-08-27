import Output from "../components/Financing/FinanceInvOutput";

const Financing = (props) => {
  console.log("I am in Financing Page");

  /* Showing Inventory: Begin */
  let invListSorted = props.inventoryList.sort((a, b) =>
    a.id < b.id ? 1 : -1
  );
  /* Showing Inventory: End */

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", color: "gray" }}>
          Choose your vehical to finance
        </h2>
      </div>
      <div className="main">
        {invListSorted.length > 0 && (
          <Output iList={invListSorted} name={props.carTitle}></Output>
        )}
        {invListSorted.length === 0 && <p>No cars found</p>}
      </div>
    </>
  );
};

export default Financing;

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
