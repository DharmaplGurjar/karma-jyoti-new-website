"use client";

import React, { useEffect, useState } from "react";
import Visitor from "../../../utils/modal";

function Page() {
  const [data, setData] = useState([]);
  const [totalVisits, setTotalVisits] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getVisitors");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const visitors = await response.json();
        // console.log(visitors);

        // Check if data is an array before updating state
        if (Array.isArray(visitors)) {
          setData(visitors);
          setTotalVisits(visitors.length);
        } else {
          throw new Error("Invalid response data");
        }
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Visitor Tracking Dashboard</h1>
      <div className="flex items-center justify-between">
      <p className="text-lg">Total Page Visits: {totalVisits}</p>
      <p className="text-lg">
  Total Unique Visitors: {new Set(data.map(visitor => visitor.ip)).size}
</p>

      </div>
      

      <table className="table-auto border-collapse border border-gray-400 mt-4 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 p-2">IP Address</th>
            <th className="border border-gray-400 p-2">Browser</th>
            <th className="border border-gray-400 p-2">Platform</th>
            <th className="border border-gray-400 p-2">Device</th>
            <th className="border border-gray-400 p-2">Language</th>
            <th className="border border-gray-400 p-2">Location</th>
            <th className="border border-gray-400 p-2">Visit Time</th>
            <th className="border border-gray-400 p-2">Page Visited</th>
          </tr>
        </thead>
        <tbody>
          {data.map((visitor, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 p-2">{visitor.ip}</td>
              <td className="border border-gray-400 p-2">{visitor.browser}</td>
              <td className="border border-gray-400 p-2">{visitor.platform}</td>
              <td className="border border-gray-400 p-2">{visitor.deviceType}</td>
              <td className="border border-gray-400 p-2">{visitor.language}</td>
              <td className="border border-gray-400 p-2">{visitor.location}</td>
              <td className="border border-gray-400 p-2">
                {new Date(visitor.visitTime).toLocaleString()}
              </td>
              <td className="border border-gray-400 p-2">{visitor.page}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
