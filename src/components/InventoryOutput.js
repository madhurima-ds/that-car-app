import Card from './Card';
import './InventoryOutput.css';

import { Link } from 'react-router-dom';

const InventoryOutput = (props) => {
    const invList = props.iList;

    const onClickHandler = (id) => {    
        if(!localStorage.getItem("rView1")) { // recently viewed history in localStorage is empty
            localStorage.setItem("rView1", id);
            localStorage.setItem("rViewLastChanged", "1");
            return;
        }
        
        const lastChngd = localStorage.getItem("rViewLastChanged");

        if(lastChngd === "1") {
            addToRecentlyViewed("2", id);
        } else if (lastChngd === "2") {
            addToRecentlyViewed("3", id);
        } else if (lastChngd === "3") {
            addToRecentlyViewed("1", id);

        }
    }

    const addToRecentlyViewed = (rView, id) => {
        // Do not add the car if already added to the recent history.
        if((localStorage.getItem("rView1") && localStorage.getItem("rView1") === id) 
        || (localStorage.getItem("rView2") && localStorage.getItem("rView2") === id) 
        || (localStorage.getItem("rView3") && localStorage.getItem("rView3") === id)) 
        {
            return;
        }

        localStorage.setItem("rView"+rView, id);
        localStorage.setItem("rViewLastChanged", rView);
    }
    
    return (invList.map(car =>  
    <div className='inventoryOutput'>  
      <Link to={`/details/${car.id}`}><Card className='card' onClick={() => onClickHandler(car.id)}>
        <ul>
        <li> <img src={car.img} alt={car.id}></img></li>    
        <li><text style={{"color":"gray", "fontSize": "11px", "textTransform":"uppercase"}}>{props.name} CERTIFIED</text></li>    
        <li><text style={{"fontSize":"20px", "fontWeight":"bolder"}}>{car.year}  {car.make}  {car.model}</text> </li>
        <li><span>{car.type} <b>.</b> {car.mileage} miles</span></li>
        <li><h2>${car.price}</h2></li>
        <hr></hr>
        <li style={{"fontSize": "13px"}}> <b>Free shipping</b> . Get it by tomorrow</li>
        </ul>
      </Card>
      </Link>
    </div>
    ));
}

export default InventoryOutput;