import "./styles/main.scss";
import NeckView from "./components/neck/neck-view";
import NeckModel from "./components/neck/neck-model";
import ScoreView from "./components/score/score-view";
import SettingsView from "./components/settings/settings-view";
import SettingsController from "./components/settings/settings-controller";
import SettingsModel from "./components/settings/settings-model";
import ScoreController from "./components/score/score-controller";
import ScoreModel from "./components/score/score-model";
import randomNumber from "./lib/random-number";
import Observable from "./lib/observable";

export const initialise = synth => {
  const neckElement = document.getElementById("neck-view");
  const scoreElement = document.getElementById("score-view");
  const settingsElement = document.getElementById("settings-view");

  const settingsModel = SettingsModel(Observable());
  const neckModel = NeckModel(randomNumber, Observable());
  const scoreModel = ScoreModel(neckModel, Observable());

  const settingsController = SettingsController(settingsModel);
  const scoreController = ScoreController(scoreModel, synth);

  new ScoreView(scoreModel, scoreElement);
  const neckView = new NeckView(
    neckElement,
    neckModel,
    scoreController.scoreAnswer
  );

  const settingsView = new SettingsView(settingsModel, settingsElement, settingsController.toggleVisibility);

  neckView.update();
  scoreModel.initialise();
  settingsView.update();
};
