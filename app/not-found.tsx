'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
      
  

        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or was moved.
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Go to Homepage
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
