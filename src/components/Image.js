import cssClass from './Image.css';

const Image = (imgProps) => {
    return <img className={cssClass} src={imgProps.logo} alt='carImage'></img>
}

export default Image;