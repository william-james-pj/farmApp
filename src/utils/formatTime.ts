import { format } from "date-fns";

export const formatTime = (value: string) => {
  const milliseconds = Number(value) * 1000;

  return format(new Date(milliseconds), "kk:mm b");
};
