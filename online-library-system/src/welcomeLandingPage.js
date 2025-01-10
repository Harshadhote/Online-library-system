import React from "react";

const WelcomeLandingPage = () => {
  return (
    <div
      className="h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url ('../assets/images/bg.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center bg-black bg-opacity-60 p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Amazing App
        </h1>
        <p className="text-lg mb-6">
          Your gateway to an incredible digital experience
        </p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-lg text-lg font-medium shadow-lg">
            Explore Now
          </button>
          <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg font-medium shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default welcomeLandingPage;
