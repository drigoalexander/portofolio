export default function (y1: number, y2: number) {
  const relativeSize = 16;

  const viewportMin = (y1 - relativeSize) * 25;
  const viewportMax = (y2 - relativeSize) * 25;

  const viewportWidth = (100 * (y2 - y1)) / (viewportMax - viewportMin);

  return `clamp(${y1 / 16}rem,${viewportWidth}vw+${relativeSize / 16}rem,${
    y2 / 16
  }rem)`;
}
