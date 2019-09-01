import "./styles.css";
import NeckView from "./neck-view";
import ScoreView from "./score-view";
import GameController from "./game-controller";
import GameModel from "./game-model";
import neckModel from "./neck-model";

const gameModel = GameModel();
const gameController = GameController(gameModel);
const scoreElement = document.getElementById("score-view");
new ScoreView(gameModel, scoreElement);

const neckElement = document.getElementById("neck-view");
const neckView = NeckView(neckElement, neckModel, gameController.scoreAnswer);

neckView.update();
gameModel.initialise();
