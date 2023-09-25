import React, { Fragment} from "react";
import Inventory from "../components/Inventory/Inventory";

const InventoryPage = (props) => {    

    const updateInventoryHandler = (updatedInventory) => {
        props.onUpdate(updatedInventory);
    }

    return ( 
        <Fragment>
        <Inventory inventoryList={props.inventoryList} imageLibrary={props.imageLibrary} onUpdate={updateInventoryHandler} />
        </Fragment>
    );
};

export default InventoryPage;