import Observable from "./observable";

const GameModel = () => {
  const observable = Observable();
  const notes = ["C", "C#", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  let currentNoteBeingGuessed = "C";

  const initialise = () => {
    observable.notify();
  };

  const addObserver = observer => {
    observable.addObserver(observer);
  };

  const scoreAnswer = answer => {
    if (answer === currentNoteBeingGuessed) correctAnswers += 1;
    if (answer !== currentNoteBeingGuessed) incorrectAnswers += 1;
    currentNoteBeingGuessed = randomNote();
    observable.notify();
  };

  const randomNote = () => notes[randomIndex()];

  const randomIndex = () => {
    return Math.floor(Math.random() * Math.floor(notes.length - 1));
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

export default GameModel;
