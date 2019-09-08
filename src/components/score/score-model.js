const ScoreModel = (neck, observable) => {
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let currentNoteBeingGuessed = neck.randomNote();

  const initialise = () => {
    observable.notify();
  };

  const addObserver = observer => {
    observable.addObserver(observer);
  };

  const handleCorrectAnswer = note => {
    if (currentNoteBeingGuessed.hasSameNameAs(note)) correctAnswers += 1;
  };

  const handleIncorrectAnswer = (note, string) => {
    if (currentNoteBeingGuessed.hasSameNameAs(note)) return;

    incorrectAnswers += 1;
    neck.registerIncorrectAnswerFor(note, string);
  };

  const setNextNoteToBeGuessed = () => {
    currentNoteBeingGuessed = neck.randomNote();
  };

  const scoreAnswer = (note, string) => {
    handleCorrectAnswer(note);
    handleIncorrectAnswer(note, string);
    setNextNoteToBeGuessed();

    observable.notify();
  };

  return {
    initialise,
    addObserver,
    scoreAnswer,
    correctAnswers: () => correctAnswers,
    incorrectAnswers: () => incorrectAnswers,
    currentNoteBeingGuessed: () => currentNoteBeingGuessed
  };
};

export default ScoreModel;
