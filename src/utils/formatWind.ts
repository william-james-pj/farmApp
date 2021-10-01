export const formatWind = (value: string): string => {
  return `${(parseFloat(value) * 3.6).toFixed(0)} Km/h`;
};
