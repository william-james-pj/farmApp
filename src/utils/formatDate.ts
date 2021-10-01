import { format } from "date-fns";

export const formatDate = (date: string): string => {
  const milliseconds = Number(date) * 1000;

  return format(new Date(milliseconds), "EEEE, MMM dd");
};
