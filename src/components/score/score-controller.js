const ScoreController = (scoreModel, synth) => {
  const scoreAnswer = (note, octave, string) => {
    synth.triggerAttackRelease(`${note}${octave}`, "16n");
    scoreModel.scoreAnswer(note, string);
  };

  return {
    scoreAnswer
  };
};

export default ScoreController;
