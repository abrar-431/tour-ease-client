import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import SpecificSpot from "./SpecificSpot";



const CountryDetails = () => {
    const country = useLoaderData();
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-nine-ebon.vercel.app/spots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    const specificSpots = spots.filter(spot => spot.country.toLowerCase() === country.country_name.toLowerCase())
    return (
        <div>
            <Helmet>
            <title>Tour Ease | Spots of {country.country_name}</title>
        </Helmet>
        <h2 className="text-2xl font-bold text-center mt-10">Explore {country.country_name}: Discover Its Hidden Gems</h2>
            <p className="md:w-4/5 w-full text-center mx-auto my-5">Dive into the wonders of {country.country_name} with our curated collection of tourist spot cards. From bustling cities to serene landscapes, each spot offers a unique glimpse into the beauty and culture of this enchanting destination.</p>
        <div className={
            specificSpots.length < 3 ?
            'grid md:grid-cols-2 grid-cols-1 gap-10'
            :
            "grid md:grid-cols-3 grid-cols-1 gap-10 mt-5"
        }>
            <Zoom damping={0.8} duration={2000}>
                {
                    specificSpots.map(specificSpot => <SpecificSpot key={specificSpot._id} specificSpot={specificSpot}></SpecificSpot>)
                }
            </Zoom>
        </div>
        </div>
    );
};

export default CountryDetails;