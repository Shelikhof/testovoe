const toNumberOrUndefined = (value: any): number | undefined => {
  const result = !isNaN(Number(value)) ? Number(value) : undefined;
  return result;
};

export default toNumberOrUndefined;
