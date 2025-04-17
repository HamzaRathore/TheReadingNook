import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { FaSignOutAlt, FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/logout');
            })
            .catch(error => {
                console.error('Logout error:', error);
            });
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-teal-50 flex flex-col items-center justify-center p-6'>
            <div className='max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center'>
                <div className='flex justify-center mb-6'>
                    <div className='bg-indigo-100 p-4 rounded-full'>
                        <FaSignOutAlt className='text-indigo-600 text-3xl' />
                    </div>
                </div>
                
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>Ready to Leave?</h2>
                <p className='text-gray-600 mb-6'>
                    You're about to sign out of your account. We hope you enjoyed your reading journey!
                </p>
                
                <div className='flex flex-col space-y-4'>
                    <button 
                        onClick={handleLogout}
                        className='flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300'
                    >
                        <FaSignOutAlt />
                        <span>Confirm Logout</span>
                    </button>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className='flex items-center justify-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300'
                    >
                        <FaBookOpen />
                        <span>Continue Reading</span>
                    </button>
                </div>
                
                <p className='mt-8 text-sm text-gray-500'>
                    Come back soon to discover more great books!
                </p>
            </div>
        </div>
    );
};

export default Logout;
