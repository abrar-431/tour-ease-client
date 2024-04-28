import { Carousel } from "react-responsive-carousel";
import { Typewriter } from "react-simple-typewriter";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Experience the adventure with Tour Ease and{' '}
                <span className="text-2xl font-bold text-blue-600">
                    <Typewriter
                        words={['Enjoy', 'Eat', 'Sleep', 'Tour', 'Wander']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    >
                    </Typewriter>
                </span>
            </h1>
            <p className="my-5 text-center w-1/2 mx-auto">Tour Ease is your ultimate travel companion, simplifying every step of your journey. From seamless bookings to expert recommendations, embark on your adventures with confidence and ease.</p>
            <div className="w-2/5 mx-auto">
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
        </div>
    );
};

export default Banner;