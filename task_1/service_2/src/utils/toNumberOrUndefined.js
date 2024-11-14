const toNumberOrUndefined = (value) => {
  const result = !isNaN(Number(value)) ? Number(value) : undefined;
  return result;
};

export default toNumberOrUndefined;
