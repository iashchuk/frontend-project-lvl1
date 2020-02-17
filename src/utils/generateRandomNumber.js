const generateRandomNumber = (min = 0, max = 99) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

export default generateRandomNumber;
