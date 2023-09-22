import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../../store/status";

import classes from "./Inventory.module.css";

import InventoryForm from "./InventoryForm";
import InventoryPreview from "./InventoryPreview";
import Button from "../UI/Button";
import Table from "../Table/Table";

const Inventory = (props) => {
  const serverURL = useSelector((state) => state.env.serverURL);
  const dispatch = useDispatch();
  const inventoryList = props.inventoryList;
  const imageLibrary = props.imageLibrary;

  const emptyItem = {
    vin: "",
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
  const [error, setError] = useState(null);

  // Load the table data
  inventory.forEach((item) => {
    const tableRow = [];

    tableRow.push({
      value: <img src={item.img} alt={item.id} />,
      isVisible: true,
    });
    tableRow.push({ value: item.vin, isVisible: true });
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

  const addInventoryHandler = async (newVehicle) => {
    dispatch(statusActions.showStatus("Saving..."));
    setError(null);

    const url = serverURL + "/v1/vehicles/";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newVehicle),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let savedVehicle = await response.json();

      console.log(savedVehicle);
      savedVehicle.img = imageLibrary.get(savedVehicle.imgName);

      const updatedInventory = [savedVehicle, ...inventory];
      setInventory(updatedInventory);
      props.onUpdate(updatedInventory);
    } catch (error) {
      setError(error);
      console.log("Error occurred: " + error.message);
    }
    dispatch(statusActions.hideStatus());
  };

  const showAddVehicleHandler = () => {
    setDisplayAddVehicle(true);
  };

  const hideAddVehicleHandler = () => {
    setDisplayAddVehicle(false);
  };

  useEffect(() => {
    setInventory(inventoryList);
  }, [inventoryList]);

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
