import {initialiseApplication} from '../src/app'
import DomTestSupport from './support/dom-test-support'
import ScoreViewTestSupport from "./support/score-view-test-support"
import NeckViewTestSupport from "./support/neck-view-test-support"
import fs from 'fs'

describe('app', () => {
  let dom
  let scoreView
  let neckView

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html', 'utf8')
    const dummySynth = {
      triggerAttackRelease: () => {}
    }

    initialiseApplication(dummySynth)

    dom = DomTestSupport(document)
    scoreView = ScoreViewTestSupport(document)
    neckView = NeckViewTestSupport(document)
  })

  it('is initialised with correct answer score of 0', () => {
    expect(scoreView.correctAnswersText()).toEqual('0')
  })

  it('is initialised with an incorrect answer score of 0', () => {
    expect(scoreView.incorrectAnswersText()).toEqual('0')
  })

  it('increments correct score count by 1 when correct note is guessed', () => {
    const currentNote = scoreView.currentNoteText()
    const buttonsRepresentingCurrentNote = neckView.allNoteButtonsByNote(currentNote)

    const aRandomButtonRepresentingCurrentNote =
      buttonsRepresentingCurrentNote[
        Math.floor(Math.random() * buttonsRepresentingCurrentNote.length)
      ]

    dom.click(aRandomButtonRepresentingCurrentNote)

    expect(scoreView.incorrectAnswersText()).toEqual('0')
    expect(scoreView.correctAnswersText()).toEqual('1')
  })

  it('increments incorrect score count by 1 when incorrect note is guessed', () => {
    const currentNote = scoreView.currentNoteText()
    const allButtonsNotRepresentingCurrentNote = neckView.allNoteButtonsNotRepresentingNote(currentNote)

    const aRandomButtonNotRepresentingCurrentNote =
      allButtonsNotRepresentingCurrentNote[
        Math.floor(Math.random() * allButtonsNotRepresentingCurrentNote.length)
      ]

    dom.click(aRandomButtonNotRepresentingCurrentNote)

    expect(scoreView.incorrectAnswersText()).toEqual('1')
    expect(scoreView.correctAnswersText()).toEqual('0')
  })
})
