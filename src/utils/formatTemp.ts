type formatTempProps = {
  celsius: string;
  tempUnit: "celsius" | "fahrenheit";
};

export const formatTemp = ({ celsius, tempUnit }: formatTempProps): string => {
  if (tempUnit === "celsius") return `${parseFloat(celsius).toFixed(0)} °C`;
  return `${(parseFloat(celsius) * (9 / 5) + 32).toFixed(0)} °F`;
};
