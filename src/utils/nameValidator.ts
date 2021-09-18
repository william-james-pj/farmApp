export const nameValidator = (name: string) => {
  const re = /^[A-Za-z ]+$/;
  return re.test(name);
};
