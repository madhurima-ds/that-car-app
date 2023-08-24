import React, { useState } from "react";

import InventoryOutput from "../components/InventoryOutput";
import AddInventory from "../components/AddInventory/AddInventory";

const Inventory = (props) => {
  const [inventory, setInventory] = useState(props.inventoryList);

  const addInventoryHandler = (newVehicle) => {     
    // *** Todo: Look into why the props.onUpdate(...) doesn't work in this scenario       
    //setInventory((prevList) => {        
      //return [newVehicle, ...prevList];
    //});
    //props.onUpdate(inventory);
    const newInventory  = [newVehicle, ...inventory];
    setInventory(newInventory);
    props.onUpdate(newInventory);
  };

  return (
    <React.Fragment>        
      <AddInventory onSave={addInventoryHandler} />
      <div className="row">
        <div className="main">
          {props.inventoryList && (
            <InventoryOutput
              iList={inventory}
              name={props.carTitle}
            ></InventoryOutput>
          )}
          {props.inventoryList.length === 0 && <p>No cars found</p>}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Inventory;
