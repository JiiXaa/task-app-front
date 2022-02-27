export const getClasses = (classes) => {
  // helper function returns only values which exist (omit empty), transform to string and get rid of whitespace.
  return classes
    .filter((item) => item !== '')
    .join(' ')
    .trim();
};
