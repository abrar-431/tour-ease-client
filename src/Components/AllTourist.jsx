import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";


const AllTourist = () => {
    const spots = useLoaderData();
    console.log(spots)
    return (
        <div>
            <div className="mt-6">
            <h2 className="text-2xl font-bold text-center">European Escapes: Unforgettable Tourist Spots</h2>
            <p className="w-4/5 text-center mx-auto mt-3">Embark on a virtual tour through most iconic destinations of Europe. From the romance of Paris to the ancient wonders of Rome, explore breathtaking landmarks and hidden gems that define the essence of European travel.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
            {
                spots.map(spot => <Spot key={spot._id} touristSpot={spot}></Spot>)
            }
        </div>
        </div>
        </div>
    );
};

export default AllTourist;