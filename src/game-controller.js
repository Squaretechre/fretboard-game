const GameController = (gameModel, synth) => {
  const scoreAnswer = (note, octave, string) => {
    synth.triggerAttackRelease(`${note}${octave}`, "16n");
    gameModel.scoreAnswer(note, string);
  };

  return {
    scoreAnswer
  };
};

export default GameController;
