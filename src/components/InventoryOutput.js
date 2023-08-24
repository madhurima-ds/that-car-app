import Card from './Card';
import Modal from '../components/Modal';
import './InventoryOutput.css';

import { useState } from 'react';

import img from '../assets/under_construction.jpg';

const InventoryOutput = (props) => {
    const invList = props.iList;

    const [lastSet, setLastSet] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const onClickHandler = (id) => {        
        if(lastSet === '' || lastSet === 'rView3') {
            localStorage.setItem("rView1", id);
            setLastSet('rView1');
        } else if (lastSet === 'rView1') {
            localStorage.setItem("rView2", id);
            setLastSet('rView2');
        } else if (lastSet === 'rView2') {
            localStorage.setItem("rView3", id);
            setLastSet('rView3');
        }
        setOpenModal(true);
    }

    const closeHandler = () => {
        setOpenModal(false);
    }

    
    return (invList.map(car =>  
    <div className='inventoryOutput'>    
    <Card onClick={() => onClickHandler(car.id)}>
        <ul>
        <li> <img src={car.img} alt={car.id}></img></li>    
        <li><text style={{"color":"gray", "fontSize": "11px", "textTransform":"uppercase"}}>{props.name} CERTIFIED</text></li>    
        <li><text style={{"fontSize":"20px", "fontWeight":"bolder"}}>{car.year}  {car.make}  {car.model}</text> </li>
        <li><span>{car.type} <b>.</b> {car.mileage} miles</span></li>
        <li><h2>${car.price}</h2></li>
        <hr></hr>
        <li style={{"font-size": "13px"}}> <b>Free shipping</b> . Get it by tomorrow</li>
        </ul>
    </Card>
    { openModal && <Modal content={img} onClick={closeHandler}></Modal>}
    </div>
    ));
}

export default InventoryOutput;