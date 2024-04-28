import { Helmet } from "react-helmet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddTourist = () => {
    const handleAddTourist = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const image = form.image.value;
        const description = form.description.value;

        const touristSpot = {name, email, spot, country, location, cost, seasonality, time, visitors, image, description};
        fetch('http://localhost:5000/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(touristSpot),
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast('Tourist Spot added successfully')
            }
            form.reset();
        })
    }
    return (
        <div>
            <Helmet>
                <title>Tour Ease | Add Tourist Spot</title>
            </Helmet>
            <h2 className="text-2xl font-bold text-center mt-10">Add Tourist Spot</h2>
            <p className="text-center w-2/3 mx-auto my-5">Use this Form to Share Your Must-See Tourist Spots and Inspire Fellow Travelers on Their Next Adventure!</p>
            <div className="flex gap-6">
                <div className="w-1/3">
                    <Carousel>
                        <div>
                            <img className="rounded-lg" src="https://i.ibb.co/6Jxttk6/banner-1.jpg" />
                            <p className="legend">Tour Ease Spot-1</p>
                        </div>
                        <div>
                            <img className="rounded-lg" src="https://i.ibb.co/0nzzLxj/banner-2.jpg" />
                            <p className="legend">Tour Ease Spot-2</p>
                        </div>
                        <div>
                            <img className="rounded-lg" src="https://i.ibb.co/GVwB3cw/banner-3.jpg" />
                            <p className="legend">Tour Ease Spot-3</p>
                        </div>
                        <div>
                            <img className="rounded-lg" src="https://i.ibb.co/0MKVSJB/banner-4.jpg" />
                            <p className="legend">Tour Ease Spot-4</p>
                        </div>
                    </Carousel>
                </div>
                <form onSubmit={handleAddTourist} className="bg-slate-700 p-10 rounded-xl">
                    <div className="flex gap-4 mb-10">
                        <div className="w-1/3">
                            <label className="font-medium">User Name</label>
                            <input type="text" placeholder="User Name" name="name" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">User Email</label>
                            <input type="text" placeholder="User Email" name="email" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">Tourist Spot Name</label>
                            <input type="text" placeholder="Tourist Spot Name" name="spot" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>

                    </div>
                    <div className="flex gap-4 mb-10">
                        <div className="w-1/3">
                            <label className="font-medium">Country Name</label>
                            <input type="text" placeholder="Country Name" name="country" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">Location</label>
                            <input type="text" placeholder="Location" name="location" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">Average Cost</label>
                            <input type="text" placeholder="Average Cost" name="cost" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                    </div>
                    <div className="flex gap-4 mb-10">
                        <div className="w-1/3">
                            <label className="font-medium">Seasonality</label>
                            <input type="text" placeholder="Seasonality" name="seasonality" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">Travel Time</label>
                            <input type="text" placeholder="Travel Time" name="time" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/3">
                            <label className="font-medium">Total Visitors Per Year</label>
                            <input type="text" placeholder="Total Visitors Per Year" name="visitors" className="input input-bordered w-full max-w-xs bg-gray-200 mt-2" />
                        </div>
                    </div>
                    <div className="flex gap-6 mb-10">
                        <div className="w-1/2">
                            <label className="font-medium">Image URL</label>
                            <input type="text" placeholder="Image URL" name="image" className="input input-bordered w-full bg-gray-200 mt-2" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-medium">Short Description</label>
                            <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full bg-gray-200 mt-2" />
                        </div>
                    </div>
                    <button className="btn w-full">Add</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddTourist;