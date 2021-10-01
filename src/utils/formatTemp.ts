type formatTempProps = {
  value: string;
  tempUnit: "celsius" | "fahrenheit";
};

export const formatTemp = ({ value, tempUnit }: formatTempProps): string => {
  if (tempUnit === "celsius") return `${parseFloat(value).toFixed(0)} °C`;
  return `${(parseFloat(value) * (9 / 5) + 32).toFixed(0)} °F`;
};
