const goldenRatio = (1 + Math.sqrt(5)) / 2;
const irrational2 = 1 + Math.sqrt(2);
const irrational3 = (9 + Math.sqrt(221)) / 10;

export const layoutPhyllotaxis = (
  data,
  {
    radius = 4,
    radiusOffset = radius / 2,
    spacing = radius * 1.2,
    theta = (2 * Math.PI) / irrational3,
    width = 0,
    height = 0,
  } = {}
) => {
  return data.map((d, i) => {
    const scaledTheta = theta * i;
    const scaledRadius = spacing * Math.sqrt(i) + radiusOffset;

    return {
      ...d,
      r: radius,
      x: Math.cos(scaledTheta) * scaledRadius + width / 2,
      y: Math.sin(scaledTheta) * scaledRadius + height / 2,
    };
  });
};
