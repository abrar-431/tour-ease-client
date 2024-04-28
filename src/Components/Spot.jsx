import PropTypes from 'prop-types';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaPeoplePulling } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Spot = ({touristSpot}) => {
    const {_id, image, spot, cost, visitors, time, seasonality} = touristSpot;
    return (
        <div className='border-gray-200 border-2 p-4 rounded-xl flex flex-col'>
            <div className='flex-grow'>
                <img className='rounded-lg' src={image} alt={spot} />
                <h2 className="text-2xl font-bold my-3">{spot}</h2>
                <p>Seasonality: {seasonality}</p>
                <div className='my-4 flex justify-between'>
                    <div className='flex items-center'>
                        <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                        <p>{cost}</p>
                    </div>
                    <div className='flex items-center'>
                        <FaRegCalendarTimes className='text-lg mr-2'></FaRegCalendarTimes>
                        <p>{time}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                        <FaPeoplePulling className='text-lg mr-2'></FaPeoplePulling>
                        <p>Visitors per year: {visitors}</p>
                    </div>
                <div className='text-center mt-5'>
                    <Link to={`/spots/${_id}`}><button className='btn btn-accent text-white'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Spot;
Spot.propTypes = {
    touristSpot: PropTypes.object,
}