export type Point = [number, number];

export const MURRAY_POINTS: Array<Point> = [
  [-0.25, 0], [1, 0], [2, 0], [2, 1], [1, 1], [0, 1], [0, 2], [1, 2], [2, 2],
  [2, 3], [1, 3], [0, 3], [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4],
  [5, 3], [4, 3], [3, 3], [3, 2], [4, 2], [5, 2], [5, 1], [4, 1], [3, 1],
  [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [8, 1], [7, 1], [6, 1],
  [6, 2], [7, 2], [8, 2], [8, 3], [7, 3], [6, 3], [6, 4], [7, 4], [8, 4],
  [9, 4], [10, 4], [11, 4], [11, 3], [10, 3], [9, 3], [9, 2], [10, 2],
  [11, 2], [11, 1], [10, 1], [9, 1], [9, 0], [10, 0], [11, 0], [12, 0],
  [13, 0], [14, 0], [14, 1], [13, 1], [12, 1], [12, 2], [13, 2], [14, 2],
  [14, 3], [13, 3], [12, 3], [12, 4], [13, 4], [14.25, 4],
];

export type MurraySegment = {
  polylinePoints: string;
  viewBox: string;
  width: number;
  height: number;
};

export function getMurraySegment(start: number, length: number): MurraySegment {
  const end = Math.min(start + length, MURRAY_POINTS.length);
  const slice = MURRAY_POINTS.slice(start, end);

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const [x, y] of slice) {
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }

  const width = maxX - minX || 1;
  const height = maxY - minY || 1;

  const polylinePoints = slice
    .map(([x, y]) => `${x - minX},${y - minY}`)
    .join(" ");

  const pad = 0.2;
  const viewBox = `${-pad} ${-pad} ${width + pad * 2} ${height + pad * 2}`;

  return { polylinePoints, viewBox, width, height };
}
