// // src/components/RadarChart.js
// import React from 'react';
// import { Radar } from 'react-chartjs-2';
// import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
// import { useHomePage } from '@/MainPage/FirstPage/hook/useHomePage';

// ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// const AnalyticsCart = () => {
//   const {
//     userProject,
//   } = useHomePage();
//   const newStyles = userProject?.flatMap((project) => {
//     const totalAssigned = project?.tasks
//       ?.flatMap((el) => el?.assignedTo?.length || 0)
//       .reduce((acc, length) => acc + length, 0);

//     const totalCompleted = project?.tasks
//       ?.flatMap(
//         (task) =>
//           task?.assignedTo?.filter((person) => person?.completed === true)
//             .length || 0
//       )
//       .reduce((acc, length) => acc + length, 0);

//     const widthPercentage =
//       totalCompleted > 0 ? (totalCompleted / totalAssigned) * 100 : 0;

//     return {
//       width: `${widthPercentage}%`,
//     };
//   });
//   console.log(newStyles, 'hello');
//   const data = {
//     // labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Flexibility', 'Skill'],
//     // labels: [userProject?.map((el)=>{
//     //     el?.name?.slice(0, 20)
//     //   })]
//     labels: userProject?.map((el) => el?.name?.slice(0, 20)) || [],
//     datasets: [
//       // {
//       //   label: 'Athlete A',
//       //   data: newStyles,
//       //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
//       //   borderColor: 'rgba(255, 99, 132, 1)',
//       //   borderWidth: 1,
//       // },
//       {
//         label: 'Athlete B',
//         data: newStyles?.map((el)=> el) || [],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       r: {
//         angleLines: {
//           display: true,
//         },
//         suggestedMin: 0,
//         suggestedMax: 100,
//       },
//     },
//   };

//   return (
//     <div className="max-w-md mx-auto p-8">
//       <Radar data={data} options={options} />
//     </div>
//   );
// };

// export default AnalyticsCart;



// src/components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useHomePage } from '@/MainPage/FirstPage/hook/useHomePage';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const AnalyticsCart = () => {
  const { userProject } = useHomePage();

  const newStyles = userProject?.map((project) => {
    const totalAssigned = project?.tasks
      ?.flatMap((el) => el?.assignedTo?.length || 0)
      .reduce((acc, length) => acc + length, 0);

    const totalCompleted = project?.tasks
      ?.flatMap(
        (task) =>
          task?.assignedTo?.filter((person) => person?.completed === true)
            .length || 0
      )
      .reduce((acc, length) => acc + length, 0);

    const widthPercentage =
      totalCompleted > 0 ? (totalCompleted / totalAssigned) * 100 : 0;

    return widthPercentage;
  }) || [];

  const data = {
    labels: userProject?.map((el) => el?.name?.slice(0, 20)) || [],
    datasets: [
      {
        label: 'Project Progress',
        data: newStyles,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Radar data={data} options={options} />
    </div>
  );
};

export default AnalyticsCart;





