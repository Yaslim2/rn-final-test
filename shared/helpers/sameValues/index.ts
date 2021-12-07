const sameValues = (arr1: number[], arr2: number[]) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index])
  );
};

export default sameValues;
