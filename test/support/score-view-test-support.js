import DomTestSupport from "./dom-test-support"

const ScoreViewTestSupport = document => {
    const domSupport = DomTestSupport(document)

    return {
        correctAnswersText: () => domSupport.getTextContentByTestId('correct-answers'),
        incorrectAnswersText: () => domSupport.getTextContentByTestId('incorrect-answers'),
        currentNoteText: () => domSupport.getTextContentByTestId('current-note'),
    }
}

export default ScoreViewTestSupport
