const note = (name, octave, string, fret) => {
  const visible = true;
  let incorrectAnswers = 0;
  let lastGuessedIncorrectly = false;

  const addIncorrectAnswer = () => {
    incorrectAnswers += 1;
    lastGuessedIncorrectly = true;
  };

  const resetLastGuessedIncorrectly = () => {
    lastGuessedIncorrectly = false;
  };

  const hasSameNameAs = otherName => {
    return name === otherName;
  };

  return {
    name,
    octave,
    string,
    fret,
    visible,
    incorrectAnswers: () => incorrectAnswers,
    addIncorrectAnswer,
    lastGuessedIncorrectly: () => lastGuessedIncorrectly,
    resetLastGuessedIncorrectly,
    hasSameNameAs
  };
};

export default note;
