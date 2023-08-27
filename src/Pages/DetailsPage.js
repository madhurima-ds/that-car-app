import Details from '../components/Details';
import { useParams } from 'react-router-dom';

const DetailsPage = (props) => {
    const params = useParams();

    return (
        <div>
            <Details id={params.id} inventoryList={props.inventoryList} carTitle={props.carTitle}></Details>
        </div>
    );
}

export default DetailsPage;