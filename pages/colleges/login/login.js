import React, { useState } from 'react';
import Button from '@/components/common/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your email" 
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="Enter your password" 
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <Button label="Login" type="submit" />
          </div>
        </form>

        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don't have an account? 
            <a href="/signup" className="text-blue-500 hover:underline"> Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
