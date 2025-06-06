// School of CS has the Murray Polygon Space Filling Curve 
// Written by the Univerity of St Andrews CS Goat: Jack Cole (himself)
// But bro wrote the program in 87 (boomer), no comments and single letter variables :(
// https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/murray-polygon.html 
//
// Im just going to try and look at it to replicate it because I dont understand the algorithm 🗿


import "@/app/styles/stacsLogo.css";

type Point = [number, number];



const points: Array<Point> = [[0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [1, 3], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [5, 3], [4, 3], [3, 3], [3, 2], [4, 2], [5, 2], [5, 1], [4, 1], [3, 1], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, 1], [7, 1], [6, 1], [6, 2], [7, 2], [8, 2], [8, 3], [7, 3], [6, 3], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [11, 3], [10, 3], [9, 3], [9, 2], [10, 2], [11, 2], [11, 1], [10, 1], [9, 1], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], [14, 1], [13, 1], [12, 1], [12, 2], [13, 2], [14, 2], [14, 3], [13, 3], [12, 3], [12, 4], [13, 4], [14, 4]];

// Time for some not very nice coding (forgive me)

const sPoints = [[-0.25, 0], [0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2], [1, 2], [2.25, 2]];

const tPoints1 = [[2.75, 2], [4, 2], [5.25, 2]];
const tPoints2 = [[4, 2], [4, -0.25]];

const aPoints1 = [[6, -0.25], [6, 2], [7, 2], [8, 2], [8, 1], [8, -0.25]];
const aPoints2 = [[6, 1], [7, 1], [8, 1]];

const cPoints = [[11, 0], [10, 0], [9, 0], [9, 1], [9, 2], [10, 2], [11, 2]];

const s2Points = [[11.75, 0], [13, 0], [14, 0], [14, 1], [13, 1], [12, 1], [12, 2], [13, 2], [14.25, 2]];

export default function StacsLogo() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        viewBox="0 -0.5 14.5 5"
        className="w-full h-28"
      >
        <path
          className="murray-path"
          d={`M ${points[0][0]} ${4 - points[0][1]} ${points.map((point, i) =>
            i === 0 ? '' : `L ${point[0]} ${4 - point[1]}`
          ).join(' ')}`}
        />
      </svg>

      <svg viewBox="0 0.5 14.5 5" className="w-full h-28 my-[-1rem]">
        <path className="stacs-letter" d={`M ${sPoints.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${tPoints1.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${tPoints2.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${aPoints1.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${aPoints2.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${cPoints.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${s2Points.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
      </svg>

      <svg
        viewBox="0 -0.5 14.5 5"
        className="w-full h-28"
      >
        <path
          className="murray-path"
          d={`M ${points[points.length - 1][0]} ${points[points.length - 1][1]} ${points.reverse().map((point, i) =>
            i === 0 ? '' : `L ${point[0]} ${point[1]}`
          ).join(' ')}`}
        />
      </svg>
    </div>
  );
}
