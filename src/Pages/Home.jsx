import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Spot from "../Components/Spot";

const Home = () => {
    const [spots, setSpots] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=>res.json())
        .then(data=> setSpots(data))
    },[])
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className="mt-10">
            <h2 className="text-2xl font-bold text-center">European Escapes: Unforgettable Tourist Spots</h2>
            <p className="w-4/5 text-center mx-auto mt-3">Embark on a virtual tour through most iconic destinations of Europe. From the romance of Paris to the ancient wonders of Rome, explore breathtaking landmarks and hidden gems that define the essence of European travel.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
            {
                spots.map(spot => <Spot key={spot._id} touristSpot={spot}></Spot>)
            }
        </div>
        </div>
        </div>
        </div>
    );
};

export default Home;