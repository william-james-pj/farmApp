import { differenceInMinutes } from "date-fns";

export const howLongAgo = (value?: string) => {
  if (!value) return true;

  const milliseconds = Number(value) * 1000;
  const difference = differenceInMinutes(new Date(milliseconds), new Date());

  if (difference === 0) return true;
  return false;
};
