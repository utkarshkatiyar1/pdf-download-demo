import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import staticPdf from '../assets/MALAY_MOTE2.pdf';
// Make sure you have a PDF file at this path
const Dashboard = () => {
    const navigate = useNavigate();
    const userName = "Admin"; // Hardcoded username

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = staticPdf;
        link.download = 'MALAY_MOTE2.pdf'; // The name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleLogout = () => {
        // Navigate back to the login page
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-2xl p-8 text-center bg-white rounded-2xl shadow-xl"
            >
                <h1 className="text-4xl font-bold text-gray-800">
                    Welcome, <span className="text-indigo-600">{userName}</span>!
                </h1>
                <p className="mt-3 text-lg text-gray-600">
                    Your dashboard is ready. You can now manage your account and view your resources.
                </p>

                <div className="mt-8 space-x-4">
                    <motion.button
                        onClick={handleDownload}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px -10px #4f46e5" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Download PDF
                    </motion.button>

                    <motion.button
                        onClick={handleLogout}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        Logout
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;