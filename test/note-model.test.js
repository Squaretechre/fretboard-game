import note from "../src/components/neck/note-model"

describe("note model", () => {
  it("increments incorrect score count by 1 and sets note as being the last incorrectly guessed note when incorrect score count is incremented", () => {
    const aNote = note("C", 4, 4, 10)

    expect(aNote.incorrectAnswers()).toBe(0)
    expect(aNote.lastGuessedIncorrectly()).toBeFalsy()

    aNote.addIncorrectAnswer()

    expect(aNote.incorrectAnswers()).toBe(1)
    expect(aNote.lastGuessedIncorrectly()).toBeTruthy()
  })
  
  it("should be able to reset its last guessed incorrectly state", () => {
    const aNote = note("G#", 3, 5, 11)
    
    expect(aNote.lastGuessedIncorrectly()).toBeFalsy()

    aNote.addIncorrectAnswer()

    expect(aNote.lastGuessedIncorrectly()).toBeTruthy()

    aNote.resetLastGuessedIncorrectly()

    expect(aNote.lastGuessedIncorrectly()).toBeFalsy()
  })

  it("should be equal to a note of the same name", () => {
    const aNote = note("E", 3, 6, 12)
    
    expect(aNote.hasSameNameAs('E')).toBeTruthy()
  })
})