function ScoreView(model, element) {
  this.model = model;
  this.element = element;

  this.model.addObserver(this);

  this.update = () => {
    const currentNoteBeingGuessed = model.currentNoteBeingGuessed()
    const html = `
      <div class="score">
        <div class="score__find-label">
          <span>Find: </span>
          <span data-test-id="current-note">${currentNoteBeingGuessed.name}</span>
        </div>
        <div class="score__answer-totals">
          <div class="score__answer-totals-col">
            <span class="score__icon score__icon--correct">✔</span>
            <span data-test-id="correct-answers">${model.correctAnswers()}</span>
          </div>
          <div class="score__answer-totals-col">
            <span class="score__icon score__icon--incorrect">✘</span>
            <span data-test-id="incorrect-answers">${model.incorrectAnswers()}</span>
          </div>
        </div>
      </div>`;

    this.element.innerHTML = html;
  };
}

export default ScoreView;
