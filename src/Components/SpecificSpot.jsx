import PropTypes from 'prop-types';
import { FaLocationArrow, FaMoneyCheckDollar } from 'react-icons/fa6';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SpecificSpot = ({ specificSpot }) => {
    const { _id, image, country, spot, cost, description, location, seasonality } = specificSpot;
    return (
        <div className='border-gray-200 border-2 p-4 rounded-xl flex flex-col'>
            <div className='flex-grow'>
                <h2 className="text-2xl font-bold my-3">{spot}</h2>
                <img className='rounded-lg mx-auto w-4/5' src={image} alt={spot} />
                <div className="flex justify-between my-4">
                    <div className='flex items-center'>
                        <MdLocationOn className='text-lg mr-2'></MdLocationOn>
                        <p>{country}</p>
                    </div>
                    <div className='flex items-center'>
                        <FaLocationArrow className='text-lg mr-3'></FaLocationArrow>
                        <p>{location}</p>
                    </div>
                </div>
                <p className="text-center my-2">{description}</p>

                <div className='my-4 flex justify-between'>
                    <div className='flex items-center'>
                        <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                        <p>$ {cost}</p>
                    </div>
                </div>
                <p>Seasonality: {seasonality}</p>
            </div>
            <div className='text-center mt-5'>
                <Link to={`/spots/${_id}`}><button className='btn btn-accent text-white my-6'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SpecificSpot;
SpecificSpot.propTypes = {
    specificSpot: PropTypes.object,
}