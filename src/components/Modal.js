import Card from '../components/Card';

import '../components/Modal.css';

const Modal = (props) => {
    return (
            <div className='modal'>
                 <Card className='card' onClick={props.onClick}><img src={props.content} alt="content"/></Card>
            </div> 
    );
}

export default Modal;