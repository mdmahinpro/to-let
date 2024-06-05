import React from "react";

function Features() {
  return (
    <div className="features mx-auto max-w-7xl p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Search & Filter
          </h2>
          <p className="text-gray-600">
            Use our advanced search options to find your perfect home by
            filtering based on location, price, number of bedrooms, and more.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            User Accounts
          </h2>
          <p className="text-gray-600">
            Create your own account to save your favorite listings, manage your
            advertisements, and access tailored recommendations.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Direct Messaging
          </h2>
          <p className="text-gray-600">
            Communicate directly with landlords or potential tenants through our
            secure messaging platform to discuss details and arrange viewings.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Property Verification
          </h2>
          <p className="text-gray-600">
            All listings are verified for accuracy and legitimacy to ensure a
            trustworthy environment for our users.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Virtual Tours
          </h2>
          <p className="text-gray-600">
            Explore properties from the comfort of your own home with our
            360-degree virtual tours.
          </p>
        </div>
        <div className="feature-item bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">
            Market Insights
          </h2>
          <p className="text-gray-600">
            Gain valuable insights into market trends and data analytics to make
            informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
