import React, { useState } from "react";

import classes from './Inventory.module.css';

import InventoryList from "./InventoryList";
import InventoryForm from "./InventoryForm";
import Button from "../Button";

const Inventory = (props) => {
  const [displayAddVehicle, setDisplayAddVehicle] = useState(false);
  const [inventory, setInventory] = useState(props.inventoryList);

  const addInventoryHandler = (newVehicle) => {
    // *** Todo: Look into why the props.onUpdate(...) doesn't work in this scenario
    //setInventory((prevList) => {
    //return [newVehicle, ...prevList];
    //});
    //props.onUpdate(inventory);
    const newInventory = [newVehicle, ...inventory];
    setInventory(newInventory);
    props.onUpdate(newInventory);
  };

  const showAddVehicleHandler = () => {
    setDisplayAddVehicle(true);
  };

  const hideAddVehicleHandler = () => {
    setDisplayAddVehicle(false);
  };

  return (
    <div>
      <div className={classes["inventory-title"]}>Inventory</div>      
      <div className={classes["inventory-menu"]}>
        {!displayAddVehicle && (
          <Button onClick={showAddVehicleHandler}>Add Vehicle</Button>
        )}
      </div>
      {displayAddVehicle && <InventoryForm onSave={addInventoryHandler} onCancel={hideAddVehicleHandler} />}
      <InventoryList InventoryList={props.inventoryList} />      
    </div>
  );
};

export default Inventory;
