import React from "react";

const pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple & Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doculyz is completely <strong className="text-blue-600">free and open source</strong> for individuals and small teams.
            Empower your workflow with zero cost.
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pricing Plan</h2>
            <p className="text-lg text-gray-600">
              Designed to support developers, small businesses, and open source lovers.
            </p>
          </div>

          <div className="border border-gray-200 rounded-xl shadow-sm p-10 bg-gradient-to-b from-white to-blue-50 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free Plan</h3>
            <p className="text-gray-600 mb-6">No hidden fees. No credit card required.</p>
            <p className="text-5xl font-bold text-blue-600 mb-6">৳ 0 /mo</p>
            <ul className="text-gray-700 space-y-3 mb-8">
              <li>✅ Unlimited document uploads</li>
              <li>✅ Access to AI-powered analysis</li>
              <li>✅ Role-based access control</li>
              {/* <li>✅ Open-source & self-hostable</li> */}
              {/* <li>✅ Community support</li> */}
            </ul>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition disabled:bg-gray-300">
              Get Started for Free
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-indigo-100 to-blue-100 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to contribute?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Doculyz is open source. Contribute on GitHub and help shape the future of document AI.
        </p>
        <a
          href="https://github.com/naimur2001/doculyz_client"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
};

export default pricing;
