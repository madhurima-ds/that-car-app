import Error from '../components/Error';

const ErrorPage = (props) => {
    return (
        <Error errorImg={props.errorImg}/>
    );
}

export default ErrorPage;