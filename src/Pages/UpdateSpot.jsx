import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateSpot = () => {
    const loadedSpot = useLoaderData();
    const [touristSpot, setTouristSpot] = useState(loadedSpot)
    const { _id, spot, country, location, cost, seasonality, time, visitors, image, description } = touristSpot;

    const handleUpdateTourist = e =>{
        e.preventDefault();
        const form = e.target;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const image = form.image.value;
        const description = form.description.value;

        const updatedTouristSpot = { spot, country, location, cost, seasonality, time, visitors, image, description};

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedTouristSpot),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount > 0){
                toast('User updated successfully')
            }
            setTouristSpot(updatedTouristSpot);
            form.reset();
        })
    }
    return (
        <div>
            <Helmet>
                <title>Update | {spot}</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mt-10 mb-4">Update {spot}</h2>
            <div className="flex md:flex-row flex-col gap-6 items-center">
                <div className="md:w-2/3 w-full">
                    <img className="rounded-xl" src={image} alt={spot} />
                </div>
                <form onSubmit={handleUpdateTourist} className="bg-slate-700 p-10 rounded-xl">
                    <div className="lg:flex gap-4 mb-10">
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Tourist Spot Name</label>
                            <input type="text" defaultValue={spot} placeholder="Tourist Spot Name" name="spot" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Location</label>
                            <input type="text" defaultValue={location} placeholder="Location" name="location" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Average Cost</label>
                            <input type="text" defaultValue={cost} placeholder="Average Cost" name="cost" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                    </div>
                    <div className="lg:flex gap-4 mb-10">
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Country Name</label>
                            <input type="text" defaultValue={country} placeholder="Country Name" name="country" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>

                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Image URL</label>
                            <input type="text" defaultValue={image} placeholder="Image URL" name="image" className="input input-bordered w-full bg-gray-200 mt-2"  required/>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Short Description</label>
                            <input type="text" defaultValue={description} placeholder="Short Description" name="description" className="input input-bordered w-full bg-gray-200 mt-2"  required/>
                        </div>
                    </div>
                    <div className="lg:flex gap-4 mb-10">
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Seasonality</label>
                            <input type="text" defaultValue={seasonality} placeholder="Seasonality" name="seasonality" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Travel Time</label>
                            <input type="text" defaultValue={time} placeholder="Travel Time" name="time" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                        <div className="lg:w-1/3 w-full">
                            <label className="font-medium">Total Visitors Per Year</label>
                            <input type="text" defaultValue={visitors} placeholder="Total Visitors Per Year" name="visitors" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2"  required/>
                        </div>
                    </div>
                    <button className="btn w-full">Update</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateSpot;