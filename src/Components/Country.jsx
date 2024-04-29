import PropTypes from 'prop-types';
import { MdLocationOn } from 'react-icons/md';
const Country = ({ country }) => {
    const { _id, country_name, image, description } = country;
    const handleCountry = () =>{
        console.log({_id}, {country_name})
    }
    return (
        <div onClick={handleCountry} className='border-2 border-gray-400 rounded-2xl p-6'>
            <div className='flex items-center'>
                <MdLocationOn className='text-3xl mr-4'></MdLocationOn>
                <p className='text-2xl font-bold'>{country_name}</p>
            </div>
            <img className='rounded-lg mx-auto my-3' src={image} alt={country_name} />
            <p>
                <span className='font-semibold'>About {country_name}: </span>
                {description}
            </p>
        </div>
    );
};

export default Country;
Country.propTypes = {
    country: PropTypes.object,
}