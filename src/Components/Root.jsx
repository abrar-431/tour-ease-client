import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="w-5/6 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;