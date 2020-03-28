import { initialiseApplication } from "./app";
import Tone from "tone";
const synth = new Tone.Synth().toMaster();

initialiseApplication(synth);
