// gradient generator function for loading bars
export function makeGradient(
  numberOfSegments: number,
  blurSegments: boolean,
  skew: number, // for animations default to 0 as skewing is added later
  colors: string[]
): string {
  let r = "linear-gradient(90deg,";

  // add colors and percentages for each segment
  for (let i = 0; i <= numberOfSegments; i++) {
    const col = colors[i % colors.length];
    const percent = (i: number): number =>
      Math.round((i / numberOfSegments) * 1000) / 10;

    r += `${col} ${percent(i)}%`;
    if (!blurSegments) {
      r += `,${col} ${percent(i + 1)}%`;

      // stop loop if it just added 100% to prevent it having 100% colors twice at the end
      if (percent(i + 1) === 100) break;
    }
    if (!(i === numberOfSegments)) r += ",";
  }

  r += ")";
  return r;
}
