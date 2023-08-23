import homePageImage from '../assets/HomePageImage2.jpg';

import Filter from '../components/Filter';
import RecentlyViewed from '../components/RecentlyViewed';

import '../components/Image.css';

const Home = (props) => {

    let finalInvList = props.inventoryList.filter((car) => car.id === +localStorage.getItem("rView1")
    || car.id === +localStorage.getItem("rView2") || car.id === +localStorage.getItem("rView3"));

    return (
        <>
        <div className='image'>
            <text>Find your perfect car here</text>
            <Filter style={{"position": "absolute", "top": "60%", "left": "50%", "transform": "translate(-50%, -200%)"}}></Filter>
            <img style={{"height":"700px", "width":"1520px"}} src={homePageImage} alt="homePageImage"/>
        </div>
        {(finalInvList.length > 0)  && <div><RecentlyViewed finalInvList={finalInvList} carTitle={props.carTitle} link1={'/search'}></RecentlyViewed></div>}
        </>
    );
}

export default Home;