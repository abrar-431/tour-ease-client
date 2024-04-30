import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Country from "./Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-server-nine-ebon.vercel.app/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="my-10">
            <h2 className="text-2xl font-bold text-center">European Escapes: Discover Diverse Destinations</h2>
            <p className="w-4/5 text-center mx-auto mt-3">Embark on a journey through six captivating countries in Europe. From the romantic streets of France to the sun-soaked beaches of Spain, each destination offers a unique blend of history, culture, and natural beauty waiting to be explored.</p>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-5">
                <Slide damping={0.8} duration={2000}>
                    {
                        countries.map(country=><Country key={country._id} country={country}></Country>)
                    }
                </Slide>
            </div>
        </div>
    );
};

export default Countries;