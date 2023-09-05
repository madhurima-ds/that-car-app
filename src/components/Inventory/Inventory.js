import React, { useState } from "react";

import classes from "./Inventory.module.css";

import InventoryForm from "./InventoryForm";
import InventoryPreview from "./InventoryPreview";
import Button from "../Button";

import Table from "../Table/Table";

const Inventory = (props) => {
  const inventoryList = props.inventoryList;

  const emptyItem = {
    id: "",
    make: "",
    model: "",
    year: "",
    type: "",
    mileage: "",
    color: "",
    price: "",
    img: "",
  };

  const tableData = [];
  const columnHeaders = [
    "Image",
    "VIN",
    "Make",
    "Model",
    "Year",
    "Type",
    "Mileage",
    "Color",
    "Price",
  ];

  const [displayAddVehicle, setDisplayAddVehicle] = useState(false);
  const [inventory, setInventory] = useState(inventoryList);
  const [previewIsVisible, setPreviewIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(emptyItem);

  // Load the table data
  inventoryList.forEach((item) => {
    const tableRow = [];

    tableRow.push({
      value: <img src={item.img} alt={item.id} />,
      isVisible: true,
    });
    tableRow.push({ value: item.id, isVisible: true });
    tableRow.push({ value: item.make, isVisible: true });
    tableRow.push({ value: item.model, isVisible: true });
    tableRow.push({ value: item.year, isVisible: true });
    tableRow.push({ value: item.type, isVisible: true });
    tableRow.push({ value: item.mileage, isVisible: true });
    tableRow.push({ value: item.color, isVisible: true });
    tableRow.push({ value: item.price, isVisible: true });
    tableRow.push({ value: item, isVisible: false });

    tableData.push(tableRow);
  });

  const displayPreviewHandler = (selectedRow) => {
    setSelectedItem(selectedRow[selectedRow.length - 1].value);
    setPreviewIsVisible(true);
  };

  const hidePreviewHandler = () => {
    setPreviewIsVisible(false);
  };

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
      <div className={classes["inventory-title"]}>INVENTORY</div>
      <div className={classes["inventory-menu"]}>
        {!displayAddVehicle && (
          <Button onClick={showAddVehicleHandler}>Add Vehicle</Button>
        )}
      </div>
      {displayAddVehicle && (
        <InventoryForm
          onSave={addInventoryHandler}
          onCancel={hideAddVehicleHandler}
        />
      )}
      <Table
        columnHeaders={columnHeaders}
        tableData={tableData}
        onRowSelect={displayPreviewHandler}
      />
      {previewIsVisible && (
        <InventoryPreview item={selectedItem} onClose={hidePreviewHandler} />
      )}
    </div>
  );
};

export default Inventory;
