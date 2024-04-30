import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Spot from "../Components/Spot";
import { Fade } from "react-awesome-reveal";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Countries from "../Components/Countries";

const Home = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('https://assignment-10-server-nine-ebon.vercel.app/spots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])

    const handleSort = () => {
        fetch('https://assignment-10-server-nine-ebon.vercel.app/sortedspots')
            .then(res => res.json())
            .then(data => setSpots(data))
    }
    return (
        <div>
            <Banner></Banner>
            <div id="spots">
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-center">European Escapes: Unforgettable Tourist Spots</h2>
                    <p className="w-4/5 text-center mx-auto mt-3">Embark on a virtual tour through most iconic destinations of Europe. From the romance of Paris to the ancient wonders of Rome, explore breathtaking landmarks and hidden gems that define the essence of European travel.</p>
                    <div className="text-center my-4">
                        <details className="dropdown">
                            <summary className="m-1 btn">Sort</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li><a onClick={handleSort}>Average Cost</a></li>
                            </ul>
                        </details>
                    </div>
                    <Fade damping={0.8} duration={4000}>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                            {
                                spots.map(spot => <Spot key={spot._id} touristSpot={spot}></Spot>)
                            }
                        </div>
                    </Fade>
                </div>
            </div>
            <Countries></Countries>
            <Contact></Contact>
            <Faq></Faq>
        </div>
    );
};

export default Home;