"use client";
// This directive tells Next.js that the component will run entirely on the client side.

import React, { useState, useEffect } from "react";

const CSRExample = () => {
  // State to store the data fetched from the simulated API
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    // The `useEffect` hook runs the enclosed code after the component is mounted.
    // It is used here to simulate fetching data from an API.

    const fetchData = async () => {
      // Simulate a response from an API
      const response = { message: "Hello from Client-Side Rendering (CSR)!" };
      // Update the state with the fetched data
      setData(response);
    };

    fetchData(); // Call the function to simulate fetching data
  }, []); // The empty dependency array ensures this runs only once after the component mounts.

  return (
    <div className="p-10 flex gap-2 items-center">
      {/* Main container with padding and flex layout */}
      <div className="flex flex-col gap-3">
        {/* Column layout with gaps between elements */}
        <h1 className="text-3xl">Client-Side Rendering (CSR)</h1>
        {/* Display the fetched data or a loading message */}
        {data ? (
          // If data is available, display the message in blue text
          <p className="text-blue-500 text-lg">{data.message}</p>
        ) : (
          // If data is not yet available, display a "Loading..." message in gray text
          <p className="text-gray-500">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CSRExample;
