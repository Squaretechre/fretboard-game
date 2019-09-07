import "./styles/main.scss";
import NeckView from "./neck-view";
import ScoreView from "./score-view";
import GameController from "./game-controller";
import GameModel from "./game-model";
import NeckModel from "./neck-model";
import randomNumber from "./random-number";
import Observable from "./observable";

export const initialise = synth => {
  const neckElement = document.getElementById("neck-view");
  const scoreElement = document.getElementById("score-view");

  const neckModel = NeckModel(randomNumber, Observable());
  const gameModel = GameModel(neckModel, Observable());
  const gameController = GameController(gameModel, synth);

  new ScoreView(gameModel, scoreElement);
  const neckView = new NeckView(
    neckElement,
    neckModel,
    gameController.scoreAnswer
  );

  neckView.update();
  gameModel.initialise();
};