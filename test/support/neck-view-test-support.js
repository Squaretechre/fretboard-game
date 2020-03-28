import DomTestSupport from "./dom-test-support"

const NeckViewTestSupport = document => {
    const domSupport = DomTestSupport(document)

    const allNoteButtonsNotRepresentingNote = note => {
        const allNoteButtons = domSupport.getAllByDataAttribute('data-note');
        return Array.from(allNoteButtons).filter(button => button.getAttribute('data-note') !== note)
    }

    return {
        allNoteButtonsByNote: note => domSupport.getAllByDataAttribute(`data-note="${note}"`),
        allNoteButtonsNotRepresentingNote,
    }
}

export default NeckViewTestSupport
