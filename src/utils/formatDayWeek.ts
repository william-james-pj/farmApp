import { format } from "date-fns";

export const formatDayWeek = (date: string): string => {
  const milliseconds = Number(date) * 1000;

  return format(new Date(milliseconds), "EEEE");
};
