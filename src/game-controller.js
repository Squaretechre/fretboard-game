import Tone from "tone";

const GameController = gameModel => {
  const synth = new Tone.Synth().toMaster();

  const scoreAnswer = (note, octave, string) => {
    synth.triggerAttackRelease(`${note}${octave}`, "16n");
    gameModel.scoreAnswer(note, string);
  };

  return {
    scoreAnswer
  };
};

export default GameController;
