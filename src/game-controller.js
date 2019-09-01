import Tone from "tone";

const GameController = model => {
  const synth = new Tone.Synth().toMaster();

  const scoreAnswer = (answer, octave) => {
    synth.triggerAttackRelease(octave, "16n");
    model.scoreAnswer(answer);
  };

  return {
    scoreAnswer
  };
};

export default GameController;
