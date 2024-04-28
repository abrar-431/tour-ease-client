import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {
    const {signInUser, googleSignIn, githubSignIn} = useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then(res => {
            console.log(res.user);
            toast('Successful Login');
        })
        .catch(error=> {
            console.error(error.message);
            toast.error('You have entered wrong email or password');
        })
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(res=>{
            console.log(res.user);
            toast('Successful Login');
        })
        .catch(error=> {
            console.error(error.message);
            toast.error('You have entered wrong email or password');
        })
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(res=>{
            console.log(res.user);
            toast('Successful Login');
        })
        .catch(error=> {
            console.error(error.message);
            toast.error('You have entered wrong email or password');
        })
    }
    return (
        <div className="">
            <Helmet>
                <title>Luxury Haven | Login</title>
            </Helmet>
            <div className="">
                <h1 className="md:text-2xl text-xl font-bold mb-4 text-center">Login now!</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body text-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="flex items-center">
                        <button onClick={handleGoogleSignIn} className="btn btn-accent text-center mx-auto"><FaGoogle className="text-lg mr-3"></FaGoogle>Login With Google</button>
                    </div>
                    <div className="flex items-center mb-6 mt-3">
                        <button onClick={handleGithubSignIn} className="btn btn-accent text-center mx-auto"><FaGithub className="text-lg mr-3"></FaGithub>Login With Github</button>
                    </div>
                    <p className="mb-6 mx-6">Do not have an account? Please <Link className="font-bold text-blue-600" to="/register">Register</Link></p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;