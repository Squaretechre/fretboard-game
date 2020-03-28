import {initialise} from '../src/app';
import fs from 'fs';

describe('app', () => {
  beforeEach(() => {
    const contents = fs.readFileSync('./index.html', 'utf8');
    document.body.innerHTML = contents;
    const dummySynth = {
      triggerAttackRelease: () => {}
    };

    initialise(dummySynth);
  });

  it('is initialised with correct answer score of 0', () => {
    const correctAnswers = document.querySelectorAll(
      "[data-test-id='correct-answers']"
    )[0];

    expect(correctAnswers.textContent).toEqual('0');
  });

  it('is initialised with an incorrect answer score of 0', () => {
    const correctAnswers = document.querySelectorAll(
      "[data-test-id='incorrect-answers']"
    )[0];

    expect(correctAnswers.textContent).toEqual('0');
  });

  it('increments correct score count by 1 when correct note is guessed', () => {
    const currentNote = document.querySelectorAll(
      "[data-test-id='current-note']"
    )[0].textContent;

    const buttonsRepresentingCurrentNote = document.querySelectorAll(
      `[data-note="${currentNote}"]`
    );

    const aRandomButtonRepresentingCurrentNote =
      buttonsRepresentingCurrentNote[
        Math.floor(Math.random() * buttonsRepresentingCurrentNote.length)
      ];

    const clickEvent = new window.MouseEvent('click', {button: 0});

    aRandomButtonRepresentingCurrentNote.dispatchEvent(clickEvent);

    const correctAnswers = document.querySelectorAll(
      "[data-test-id='correct-answers']"
    )[0];

    const incorrectAnswers = document.querySelectorAll(
      "[data-test-id='incorrect-answers']"
    )[0];

    expect(incorrectAnswers.textContent).toEqual('0');
    expect(correctAnswers.textContent).toEqual('1');
  });

  it('increments incorrect score count by 1 when incorrect note is guessed', () => {
    const currentNote = document.querySelectorAll(
      "[data-test-id='current-note']"
    )[0].textContent;

    const allNoteButtons = document.querySelectorAll('[data-note]');

    const allButtonsNotRepresentingCurrentNote = Array.from(
      allNoteButtons
    ).filter(button => button.getAttribute('data-note') !== currentNote);

    const aRandomButtonNotRepresentingCurrentNote =
      allButtonsNotRepresentingCurrentNote[
        Math.floor(Math.random() * allButtonsNotRepresentingCurrentNote.length)
      ];

    const clickEvent = new window.MouseEvent('click', {button: 0});

    aRandomButtonNotRepresentingCurrentNote.dispatchEvent(clickEvent);

    const correctAnswers = document.querySelectorAll(
      "[data-test-id='correct-answers']"
    )[0];

    const incorrectAnswers = document.querySelectorAll(
      "[data-test-id='incorrect-answers']"
    )[0];

    expect(incorrectAnswers.textContent).toEqual('1');
    expect(correctAnswers.textContent).toEqual('0');
  });
});
