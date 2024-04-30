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

    const specificSpots = spots.filter(spot => spot.country === country.country_name)
    return (
        <div>
            <Helmet>
            <title>Tour Ease | Spots of {country.country_name}</title>
        </Helmet>
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