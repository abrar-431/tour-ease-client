import { Helmet } from "react-helmet";


const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Luxury Haven | 404</title>
            </Helmet>
            <h2 className="text-2xl text-center my-10">Oopps, The page you were looking for was not found!!</h2>
        </div>
    );
};

export default Error;