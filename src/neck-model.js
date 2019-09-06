const neckModel = observable => {
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

    return {
      name,
      octave,
      string,
      fret,
      visible,
      incorrectAnswers: () => incorrectAnswers,
      addIncorrectAnswer,
      lastGuessedIncorrectly: () => lastGuessedIncorrectly,
      resetLastGuessedIncorrectly
    };
  };

  const neck = [
    note("F", 2, 6, 1),
    note("A#", 2, 5, 1),
    note("D#", 3, 4, 1),
    note("G#", 3, 3, 1),
    note("C", 4, 2, 1),
    note("F", 4, 1, 1),

    note("F#", 2, 6, 2),
    note("B", 2, 5, 2),
    note("E", 3, 4, 2),
    note("A", 3, 3, 2),
    note("C#", 4, 2, 2),
    note("F#", 4, 1, 2),

    note("G", 2, 6, 3),
    note("C", 3, 5, 3),
    note("F", 3, 4, 3),
    note("A#", 3, 3, 3),
    note("D", 4, 2, 3),
    note("G", 4, 1, 3),

    note("G#", 2, 6, 4),
    note("C#", 3, 5, 4),
    note("F#", 3, 4, 4),
    note("B", 3, 3, 4),
    note("D#", 4, 2, 4),
    note("G#", 4, 1, 4),

    note("A", 2, 6, 5),
    note("D", 3, 5, 5),
    note("G", 3, 4, 5),
    note("C", 4, 3, 5),
    note("E", 4, 2, 5),
    note("A", 4, 1, 5),

    note("A#", 2, 6, 6),
    note("D#", 3, 5, 6),
    note("G#", 3, 4, 6),
    note("C#", 4, 3, 6),
    note("F", 4, 2, 6),
    note("A#", 4, 1, 6),

    note("B", 2, 6, 7),
    note("E", 3, 5, 7),
    note("A", 3, 4, 7),
    note("D", 4, 3, 7),
    note("F#", 4, 2, 7),
    note("B", 4, 1, 7),

    note("C", 3, 6, 8),
    note("F", 3, 5, 8),
    note("A#", 3, 4, 8),
    note("D#", 4, 3, 8),
    note("G", 4, 2, 8),
    note("C", 5, 1, 8),

    note("C#", 3, 6, 9),
    note("F#", 3, 5, 9),
    note("B", 3, 4, 9),
    note("E", 4, 3, 9),
    note("G#", 4, 2, 9),
    note("C#", 5, 1, 9),

    note("D", 3, 6, 10),
    note("G", 3, 5, 10),
    note("C", 4, 4, 10),
    note("F", 4, 3, 10),
    note("A", 4, 2, 10),
    note("D", 5, 1, 10),

    note("D#", 3, 6, 11),
    note("G#", 3, 5, 11),
    note("C#", 4, 4, 11),
    note("F#", 4, 3, 11),
    note("A#", 4, 2, 11),
    note("D#", 5, 1, 11),

    note("E", 3, 6, 12),
    note("A", 3, 5, 12),
    note("D", 4, 4, 12),
    note("G", 4, 3, 12),
    note("B", 4, 2, 12),
    note("E", 5, 1, 12)
  ];

  const frets = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(fret =>
      neck.filter(notes => notes.fret === fret)
    );
  };

  const addObserver = observer => {
    observable.addObserver(observer);
  };

  const registerIncorrectAnswerFor = (noteName, string) => {
    neck.forEach(note => {
      note.resetLastGuessedIncorrectly();
      if (note.name === noteName && note.string === Number(string)) {
        note.addIncorrectAnswer();
      }
    });
    observable.notify();
  };

  return {
    frets: frets(),
    addObserver,
    registerIncorrectAnswerFor
  };
};

export default neckModel;
