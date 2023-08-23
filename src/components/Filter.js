import './Filter.css';
import { useRef } from 'react';

const Filter = (props) => {

    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(inputRef.current.value);
        inputRef.current.value='';
    }

    return (
        <div className='filter'>
            <form onSubmit={submitHandler} autoComplete='off'>
            <input type='search' name='filter' placeholder="Search by color or make" 
            ref={inputRef} style={props.style}></input>
            </form>
        </div>
    );
}

export default Filter;