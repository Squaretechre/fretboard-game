import ScoreModel from "../src/components/score/score-model";
import Observable from "../src/lib/observable";
import note from "../src/components/neck/note-model";

describe("game model", () => {
  const mockNeckModel = {
    randomNote: jest.fn(() => ({
      hasSameNameAs: () => {}
    })),
    registerIncorrectAnswerFor: jest.fn()
  };

  const mockObserver = {
    update: jest.fn()
  };

  it("notifies observers when initialised", () => {
    const gameModel = ScoreModel(mockNeckModel, Observable());

    gameModel.addObserver(mockObserver);
    gameModel.initialise()

    expect(mockObserver.update).toHaveBeenCalled();
  });

  it("notifies observers of state change when an answer is scored", () => {
    const gameModel = ScoreModel(mockNeckModel, Observable());

    gameModel.addObserver(mockObserver);
    gameModel.scoreAnswer("C", 6);

    expect(mockObserver.update).toHaveBeenCalled();
  });

  it("is initialised with a correct answers score of 0", () => {
    const gameModel = ScoreModel(mockNeckModel, Observable());
    expect(gameModel.correctAnswers()).toBe(0);
  });

  it("is initialised with a incorrect answers score of 0", () => {
    const gameModel = ScoreModel(mockNeckModel, Observable());
    expect(gameModel.incorrectAnswers()).toBe(0);
  });

  it("is initialised with a random note to be guessed", () => {
    const aRandomNote = note("E", 4, 2, 5)
    const mockNeckModel = {
      randomNote: jest
        .fn()
        .mockImplementationOnce(() => aRandomNote),
      registerIncorrectAnswerFor: jest.fn()
    };

    const gameModel = ScoreModel(mockNeckModel, Observable());

    expect(gameModel.currentNoteBeingGuessed()).toBe(aRandomNote);
  });

  it("increments the correct answers score by 1 when correct note is guessed", () => {
    const mockNeckModel = {
      randomNote: jest
        .fn()
        .mockImplementationOnce(() => note("C", 3, 6, 8))
        .mockImplementationOnce(() => note("A#", 4, 2, 11)),
      registerIncorrectAnswerFor: jest.fn()
    };
    
    const dummyString = 1;

    const gameModel = ScoreModel(mockNeckModel, Observable());
    gameModel.scoreAnswer("C", dummyString)
    gameModel.scoreAnswer("A#", dummyString)

    expect(gameModel.correctAnswers()).toBe(2);
  });

  it("increments the incorrect answers score by 1 when incorrect note is guessed", () => {
    const mockNeckModel = {
      randomNote: jest
        .fn()
        .mockImplementationOnce(() => note("G#", 4, 2, 9))
        .mockImplementationOnce(() => note("D#", 4, 2, 4))
        .mockImplementationOnce(() => note("F", 4, 2, 6)),
      registerIncorrectAnswerFor: jest.fn()
    };
    
    const dummyString = 1;

    const gameModel = ScoreModel(mockNeckModel, Observable());
    gameModel.scoreAnswer("C", dummyString)
    gameModel.scoreAnswer("C#", dummyString)
    gameModel.scoreAnswer("D", dummyString)

    expect(gameModel.incorrectAnswers()).toBe(3);
  });

  it("updates the neck with an incorrect guess for a note on the string it was guessed on when note is answered incorrectly", () => {
    const mockNeckModel = {
      randomNote: jest
        .fn()
        .mockImplementationOnce(() => note("C#", 4, 3, 6))
        .mockImplementationOnce(() => note("B", 3, 4, 9)),
      registerIncorrectAnswerFor: jest.fn()
    };

    const gameModel = ScoreModel(mockNeckModel, Observable());
    gameModel.scoreAnswer("F", 6)
    gameModel.scoreAnswer("D", 9)

    expect(mockNeckModel.registerIncorrectAnswerFor).toHaveBeenCalledWith('F', 6)
    expect(mockNeckModel.registerIncorrectAnswerFor).toHaveBeenCalledWith('D', 9)
  });
});
