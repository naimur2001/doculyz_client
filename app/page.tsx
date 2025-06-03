
import React from 'react';
import { FileText, Scan, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
   <main className="">
   <div className="min-h-screen bg-gray-50">
    
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Scan Documents with
              <span className="text-blue-600 block">Professional Quality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your physical documents into high-quality digital files with our advanced scanning technology. Fast, secure, and reliable document digitization for businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/scan_doc">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                <Scan className="h-5 w-5" />
                <span>Start Scanning Now</span>
              </button></Link>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Doculyz?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade document scanning with enterprise security and lightning-fast processing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Scan and process documents in seconds with our optimized scanning algorithms.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your documents are encrypted and protected with enterprise-grade security measures.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">High Quality</h3>
              <p className="text-gray-600">
                Get crystal-clear scans with automatic enhancement and optimization features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </main>
  );
}
