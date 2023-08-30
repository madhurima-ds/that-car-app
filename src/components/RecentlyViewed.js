import Output from '../components/InventoryOutput';
import Card from '../components/Card';

import { Link } from 'react-router-dom';
import '../components/RecentlyViewed.css';
import searchImg from '../assets/search.png';

const RecentlyViewed = (props) => {
    return (
        <div>
            <div style={{fontSize:"25px", fontWeight:"bold", padding:"20px", color:"rgb(4, 4, 98)"}}>
                <label>Recently Viewed Vehicles</label>
                <br/>
            </div>
            <div className='recentlyViewed'>
                <br/><br/>
                <Output iList={props.finalInvList} name={props.carTitle}></Output> 
                <div>
                    <Card className='card'>
                        <Link to={props.link1}>
                        <ul>
                            <li><img src={searchImg} alt="searchImg"></img></li>
                            <li><text style={{"fontSize":"20px", "fontWeight":"bolder"}}>Search more cars</text></li>
                        </ul>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default RecentlyViewed;