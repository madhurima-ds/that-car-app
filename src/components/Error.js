import './Error.css';

const Error = (props) => {
    return (
        <div className='error'>
            <img src={props.errorImg} alt="errorImg"/>
        </div>
    );

}

export default Error;