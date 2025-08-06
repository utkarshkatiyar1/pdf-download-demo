import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error on new submission

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Hardcoded credentials
    const correctUsername = 'admin';
    const correctPassword = 'admin123';

    if (isLoginView) {
      if (username === correctUsername && password === correctPassword) {
        console.log('Login successful');
        navigate('/dashboard');
      } else {
        setError('Invalid username or password.');
      }
    } else {
      // For signup, we can add basic validation and then simulate success
      if (!username || !password) {
        setError('Username and password are required for signup.');
        return;
      }
      alert('Signup successful! Please proceed to login.');
      setIsLoginView(true); // Switch to login view after signup
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-slate-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl"
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {isLoginView ? 'Welcome Back!' : 'Create Your Account'}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            {isLoginView ? 'Log in to access your dashboard' : 'Get started by creating a new account'}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={isLoginView ? 'login' : 'signup'}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm appearance-none border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {!isLoginView && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required className="w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm appearance-none border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </motion.div>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border rounded-md shadow-sm appearance-none border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {error && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-center text-red-600">
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoginView ? 'Log In' : 'Sign Up'}
            </motion.button>
          </motion.form>
        </AnimatePresence>

        <p className="text-sm text-center text-gray-600">
          {isLoginView ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={() => { setIsLoginView(!isLoginView); setError(''); }}
            className="ml-2 font-medium text-indigo-600 hover:text-indigo-500"
          >
            {isLoginView ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;