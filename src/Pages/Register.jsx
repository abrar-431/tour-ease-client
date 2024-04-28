import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {createUser, auth} = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');


        if (password.length < 6) {
            toast.error('Password should be at least 6 characters ');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password should have at least one uppercase character");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password should have at least one lowercase character");
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    toast.error(error)
                });
                // console.log(res.user);
                toast('Registration successful')
            })
            .catch(error => toast.error(error))
    }
    return (
        <div>
            <Helmet>
                <title>
                    Tour Ease | Register
                </title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center my-4">Please Register</h1>
            <form onSubmit={handleRegister} className="card-body md:w-3/5 w-full mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    {
                        show ? <input type="text" name="password" placeholder="password" className="input input-bordered" required />
                            :
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    }
                    <span onClick={() => setShow(!show)} className="absolute top-3 right-2">
                        {
                            show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                        `</span>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photoUrl" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="mb-6 mx-6 text-center">Already have an account? Please <Link className="font-bold text-blue-600" to="/login">Login</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Register;