/* eslint-disable @typescript-eslint/no-explicit-any */
type animateProps = {
  duration: number;
  run: (timestamp: any) => void;
};

export function animate(item: animateProps) {
  let raf: number;
  let start: any | undefined;

  const run = function (timestamp: any) {
    if (start === undefined) {
      start = timestamp;
    }

    const runtime = timestamp - start;
    const progress = Math.min(runtime / item.duration, 1);

    if (runtime < item.duration) {
      item.run(progress);

      raf = requestAnimationFrame(run);
    } else {
      item.run(1);
      cancelAnimationFrame(raf);
    }
  };

  raf = requestAnimationFrame(run);
}

export function getTranslateValues(element: any) {
  const style = window.getComputedStyle(element);
  const matrix = style["transform"];
  // No transform property. Simply return 0 values.
  if (matrix === "none") {
    return {
      translateX: 0,
      translateY: 0,
      translateZ: 0,
    };
  }

  // Can either be 2d or 3d transform
  const matrixType = matrix.includes("3d") ? "3d" : "2d";
  const match = matrix.match(/matrix.*\((.+)\)/) as RegExpMatchArray;
  const matrixValues = match[1].split(", ");

  // 2d matrices have 6 values
  // Last 2 values are X and Y.
  // 2d matrices does not have Z value.
  if (matrixType === "2d") {
    return {
      translateX: matrixValues[4],
      translateY: matrixValues[5],
      translateZ: 0,
    };
  }

  // 3d matrices have 16 values
  // The 13th, 14th, and 15th values are X, Y, and Z
  if (matrixType === "3d") {
    return {
      translateX: matrixValues[12],
      translateY: matrixValues[13],
      translateZ: matrixValues[14],
    };
  }
}
