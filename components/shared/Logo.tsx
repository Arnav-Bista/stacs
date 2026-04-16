// School of CS has the Murray Polygon Space Filling Curve 
// Written by the Univerity of St Andrews CS Goat: Jack Cole (himself)
// But bro wrote the program in 87 (boomer), no comments and single letter variables :(
// https://info.cs.st-andrews.ac.uk/student-handbook/school/jack-cole/murray-polygon.html 
//
// Im just going to try and look at it to replicate it because I dont understand the algorithm 🗿
// The code is at stacs/misc/murrayCurve.py
// Its not really feasible to run that on the frontend so the points are generated and written as arrays. 

import "@/app/styles/Logo.css";
import { MURRAY_POINTS as points } from "@/lib/murray/points";


const sPoints = [[-0.25, 0], [0, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2], [1, 2], [2.25, 2]];

const tPoints1 = [[2.75, 2], [4, 2], [5.25, 2]];
const tPoints2 = [[4, 2], [4, -0.25]];

const aPoints1 = [[6, -0.25], [6, 2], [7, 2], [8, 2], [8, 1], [8, -0.25]];
const aPoints2 = [[6, 1], [7, 1], [8, 1]];

const cPoints = [[11, 0], [10, 0], [9, 0], [9, 1], [9, 2], [10, 2], [11, 2]];

const s2Points = [[11.75, 0], [13, 0], [14, 0], [14, 1], [13, 1], [12, 1], [12, 2], [13, 2], [14.25, 2]];

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center relative ${className}`}>
      <svg
        viewBox="-0.25 -0.5 14.5 5"
        className="w-full h-28"
      >
        <path
          className="murray-path"
          d={`M ${points[0][0]} ${4 - points[0][1]} ${points.map((point, i) =>
            i === 0 ? '' : `L ${point[0]} ${4 - point[1]}`
          ).join(' ')}`}
        />
      </svg>

      <svg viewBox="-0.25 0.5 14.5 5" className="w-full h-28 my-[-1rem]">
        <path className="stacs-letter" d={`M ${sPoints.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${tPoints1.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${tPoints2.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${aPoints1.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${aPoints2.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${cPoints.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
        <path className="stacs-letter" d={`M ${s2Points.map(point => `${point[0]} ${4 - point[1]}`).join(' L ')}`} />
      </svg>

      <svg
        viewBox="-0.25 -0.5 14.5 5"
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
