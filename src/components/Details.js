import classes from './Details.module.css';

const Details = (props) => {
    return (
        <div>
            {props.inventoryList.filter(car => car.id === props.id).map(car =>  
                <div>
                    <text style={{"position": "absolute", "top": "25%", "left": "5%", fontFamily: "verdana", fontWeight:"bold", fontSize:"20px", color: "grey", "transform": "translate(-10%, -100%)"}}>{props.carTitle} certified</text>
                    <text style={{"position": "absolute", "top": "30%", "left": "5%", fontFamily: "verdana", fontWeight:"bold", fontSize:"30px", color: "midnightBlue", "transform": "translate(-10%, -100%)"}}>{car.year} {car.make} {car.model}</text>
                    <text style={{"position": "absolute", "top": "30%", "left": "75%", fontFamily: "verdana", fontWeight:"bold", fontSize:"30px", color: "midnightBlue", "transform": "translate(-10%, -100%)"}}>${car.price}</text>               
                    <button className={classes.button_getStarted}>GET STARTED</button>
                    <img src={car.img} className={classes.main_img} alt="carDetailsImg"></img>
                </div>
                )}
        </div>
    );
}

export default Details;