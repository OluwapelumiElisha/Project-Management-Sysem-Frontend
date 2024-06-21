// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, progress, date, team, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{title}</h2>
        <button className="text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12M6 6h12m-7 12h7" />
          </svg>
        </button>
      </div>
      <p className="text-gray-500 mt-2">Progress</p>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${progress}%` }}></div>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span>{date}</span>
        <div className="flex -space-x-2">
          {team.map((member, index) => (
            <img key={index} src={member} alt="Team member" className="w-6 h-6 rounded-full border-2 border-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
