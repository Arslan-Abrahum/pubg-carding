import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home';
import { useGlobalContext } from '../../context';

function LoginForm() {
    let {isLoggedIn,setIsLoggedIn, handleLogin, setUserEmail, setUserPassword} = useGlobalContext()
    

    if (isLoggedIn) {
        return <Home />; // Render the Home component if logged in
    }
    return (
        <div>

            <div className="fixed inset-0 flex justify-center items-center  bg-image">
                <div className="bg-black  bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <div className='mb-4 rounded-t-lg p-5 text-center'>
                        <h1 className="text-shadow-custom text-3xl text-white font-bold mb-6 text-center uppercase">Login Account</h1>
                    </div>
                    <div className="FormBody">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="exampleInputEmail1" className="block text-white font-semibold mb-2 text-shadow-custom">Email address</label>
                                <input type="email" onChange={(e)=> setUserEmail(e.target.value)} name='email' className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" id="exampleInputEmail1" aria-describedby="" required />
                            </div>
                            <div className="form-group mb-6">
                                <label htmlFor="exampleInputPassword1" className="block text-white font-semibold mb-2 text-shadow-custom">Password</label>
                                <input type="password" onChange={(e)=> setUserPassword(e.target.value)} name='password' className="form-control w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" id="exampleInputPassword1" required/>
                            </div>
                            <Link to={"/login/home"} className='no-underline w-full'>
                                <button onClick={handleLogin} className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300">Login Account</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginForm