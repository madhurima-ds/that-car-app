import './Card.css';
const Card = (props) => {
    return (
            <div className='card' onClick={props.onClick}>
                {props.children}
            </div>
    );
}

export default Card;