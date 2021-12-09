const generateArray = (range: number) => {
  return Array.from({ length: range }, (_, i) => i + 1);
};

export default generateArray;
