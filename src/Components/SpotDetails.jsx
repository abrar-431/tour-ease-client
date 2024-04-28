import { Helmet } from "react-helmet";
import { FaLocationArrow, FaRegCalendarTimes, FaRegUser } from "react-icons/fa";
import { FaMoneyCheckDollar, FaPeoplePulling } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const SpotDetails = () => {
    const touristSpot = useLoaderData();
    const { name, email, spot, country, location, cost, seasonality, time, visitors, image, description } = touristSpot;
    return (
        <div>
            <Helmet>
                <title>
                    Tour Ease | {spot}
                </title>
            </Helmet>
            <h2 className="text-2xl font-bold my-4">{spot}</h2>
            <div className="flex justify-between">
                <div className='flex items-center'>
                    <MdLocationOn className='text-lg mr-2'></MdLocationOn>
                    <p>{country}</p>
                </div>
                <div className='flex items-center'>
                    <FaLocationArrow className='text-lg mr-3'></FaLocationArrow>
                    <p>{location}</p>
                </div>
            </div>
            <img className='rounded-lg w-3/4 my-3 mx-auto' src={image} alt={spot} />
            <h2 className="text-2xl font-semibold my-4 text-center">About {spot}</h2>
            <p className="text-center my-2">{description}</p>
            <h2 className="text-xl font-semibold text-center mt-10 mb-3">Which season suits best?</h2>
            <p className="text-center my-2">{seasonality}</p>
            <div className="mt-4 flex md:flex-row flex-col justify-between">
                <div className='flex items-center'>
                    <FaMoneyCheckDollar className='text-lg mr-2'></FaMoneyCheckDollar>
                    <p>$ {cost}</p>
                </div>
                <div className='flex items-center'>
                    <FaRegCalendarTimes className='text-lg mr-2'></FaRegCalendarTimes>
                    <p>{time}</p>
                </div>
                <div className='flex items-center'>
                    <FaPeoplePulling className='text-lg mr-2'></FaPeoplePulling>
                    <p>Visitors per year: {visitors}</p>
                </div>
            </div>
            <h2 className="text-lg font-semibold mt-10 mb-2">This tourist spot is added by, </h2>
            <div className="flex gap-6">
                <div className='flex items-center'>
                    <FaRegUser className='text-lg mr-2'></FaRegUser>
                    <p>{name}</p>
                </div>
                <div className='flex items-center'>
                    <MdEmail className='text-lg mr-2'></MdEmail>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;