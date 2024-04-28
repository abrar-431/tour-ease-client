import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AddTourist = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-10">Add Tourist Spots</h2>
            <p className="text-center w-2/3 mx-auto my-5">Use this Form to Share Your Must-See Tourist Spots and Inspire Fellow Travelers on Their Next Adventure!</p>
            <div className="flex justify-between">
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
                <form className="bg-gray-300 p-10 rounded-xl">
                    <div className="flex gap-10 mb-10">
                        <label>Name</label><input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                    </div>
                    <div className="flex gap-10 mb-10">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                    </div>
                    <div className="flex gap-10 mb-10">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                    </div>
                    <div className="flex gap-10 mb-10">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs  bg-gray-200" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTourist;