export default (max, seed = Math.random) => {
  let foundANewUniqueNumber = false;
  let lastGeneratedNumber = -1;
  let newNumber = -1;

  const next = () => {
    while (foundANewUniqueNumber === false) {
      newNumber = Math.floor(seed() * Math.floor(max));
      foundANewUniqueNumber = newNumber !== lastGeneratedNumber;
    }

    lastGeneratedNumber = newNumber;
    foundANewUniqueNumber = false;

    return newNumber;
  };

  return {
    next
  };
};
