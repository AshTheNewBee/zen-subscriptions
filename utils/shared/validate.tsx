export const validateNumberInput = (value: any) => {
  const re = /^[0-9\b]+$/;
  return value === "" || re.test(value);
};
