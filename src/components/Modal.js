import Card from '../components/Card';

import '../components/Modal.css';

const Modal = (props) => {
    return (
        <div className='modal'>
            <Card><img src={props.content}/></Card>
        </div>
    );
}

export default Modal;