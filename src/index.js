import "./styles/main.scss";
import NeckView from "./neck-view";
import ScoreView from "./score-view";
import GameController from "./game-controller";
import GameModel from "./game-model";
import NeckModel from "./neck-model";
import randomNumber from "./random-number";
import Observable from "./observable";

const neckElement = document.getElementById("neck-view");
const scoreElement = document.getElementById("score-view");

const neckModel = NeckModel(Observable());
const gameModel = GameModel(neckModel, randomNumber, Observable());
const gameController = GameController(gameModel, neckModel);

new ScoreView(gameModel, scoreElement);
const neckView = new NeckView(
  neckElement,
  neckModel,
  gameController.scoreAnswer
);

neckView.update();
gameModel.initialise();
