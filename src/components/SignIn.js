import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    const validateSignInForm = () => {
        const { email, password } = formData;

        if (!email) {
            setErrorMessage('Please enter your email address.');
            return false;
        }

        if (!password) {
            setErrorMessage('Please enter your password.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateSignInForm()) {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': process.env.REACT_APP_API_TOKEN,
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Login successful!');
                    console.log('User logged in:', data);
                    localStorage.setItem('token', data.token);  // Store token
                    navigate('/');  // Redirect to Home page after login
                } else {
                    setErrorMessage(data.message || 'Login failed. Please try again.');
                }
            } catch (error) {
                console.error('Network error:', error);
                setErrorMessage('Network error. Please try again later.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md bg-white p-6 space-y-6">
                 <div className="text-center">
                    <img src="./img/foodverselogo.png" alt="Food Verse Logo" className="mx-auto w-32 h-32" />
                 </div>
                {/* Form Section */}
                <form id="signinForm" className="space-y-4" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    {/* Password with Eye Icon */}
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 cursor-pointer"
                        >
                            {/* Eye icon here */}
                        </span>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 pl-2" >
                           <input
                              type="checkbox"
                              name="remember"
                              checked={formData.remember}
                              onChange={handleChange}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded" />
                           <label className="text-gray-500 text-sm">Remember Me</label>
                        </div>
                        <div className='pr-2'>
                            <Link to='#'><p className='text-blue-600'>Forget Password?</p></Link>
                            
                        </div>
                    </div>

                    {/* Error message display */}
                    {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

                    {/* Sign In Button */}
                    <div>
                        <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-bold ">
                            Sign In
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center text-sm text-gray-500">
                        Don't have an account? <Link to="/SignUp" className="text-blue-500 underline ">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;
