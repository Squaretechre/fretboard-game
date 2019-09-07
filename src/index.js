import { initialise } from "./app";
import Tone from "tone";
const synth = new Tone.Synth().toMaster();

initialise(synth);
