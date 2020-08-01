import rn from "random-number";

export const randomNumberGenerate = (from, to, exclude) => {
  const options = {
    min: from,
    max: to,
    integer: true,
  };
  const randomNumber = rn(options);
  if (randomNumber === exclude) {
    return randomNumberGenerate(from, to, exclude);
  } else {
    return randomNumber;
  }
};
