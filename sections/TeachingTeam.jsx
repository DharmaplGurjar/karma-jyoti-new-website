'use client';
import React from 'react';
import Team from '../components/Team'; // Adjust the path if needed
import { team } from '../data/team'; // ✅ Assuming you've exported your array from a separate file

function TeachingTeam() {
  return (
    <div className="min-h-screen bg-[#ffffe0]">
      <h1 className="text-3xl font-bold text-center pt-10 text-[#9b242d]">
        Teaching Team
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8">
        {team.map((item, index) => (
          <Team key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TeachingTeam;
