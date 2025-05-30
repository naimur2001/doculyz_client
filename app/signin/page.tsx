'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc'; // Google Icon

const Signin = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signin form data:', form);
    // TODO: Send to backend/signin API
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign-In clicked');
    // TODO: Trigger Google OAuth login flow
    // Example: window.location.href = '/api/auth/google'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-sm text-center text-gray-600 mb-6">Sign in to continue using Doculyz</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Sign In
          </button>
        </form>

        {/* OR Divider */}
        <div className="my-6 flex items-center justify-between">
          <span className="w-1/5 border-b border-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <span className="w-1/5 border-b border-gray-300" />
        </div>

        {/* Google Sign-In */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
