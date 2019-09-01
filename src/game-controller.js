import Tone from "tone";

const GameController = model => {
  const synth = new Tone.Synth().toMaster();

  const scoreAnswer = event => {
    const answer = event.target.getAttribute("data-note");
    const octave = event.target.getAttribute("data-octave");

    synth.triggerAttackRelease(octave, "16n");

    model.scoreAnswer(answer);
  };

  return {
    scoreAnswer
  };
};

export default GameController;
