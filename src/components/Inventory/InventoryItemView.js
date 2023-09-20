import React from "react";
import Panel from "../UI/Panel";

import classes from './InventoryItemView.module.css';

const InventoryItemView = (props) => {
    const car = props.item;
  return (
    <Panel>
      <div className={classes["inventory-view"]}>
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
          <li style={{ fontSize: "13px" }}>
            {" "}
            <b>Free shipping</b> . Get it by tomorrow
          </li>
        </ul>
      </div>
    </Panel>
  );
};

export default InventoryItemView;
