import "./styles/main.scss";
import NeckView from "./neck-view";
import ScoreView from "./score-view";
import GameController from "./game-controller";
import GameModel from "./game-model";
import neckModel from "./neck-model";

const neckElement = document.getElementById("neck-view");
const scoreElement = document.getElementById("score-view");

const gameModel = GameModel();
const gameController = GameController(gameModel);

new ScoreView(gameModel, scoreElement);
const neckView = NeckView(neckElement, neckModel, gameController.scoreAnswer);

neckView.update();
gameModel.initialise();
