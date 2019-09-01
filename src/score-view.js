function ScoreView(model, element) {
  this.model = model;
  this.element = element;

  this.model.addObserver(this);

  this.update = () => {
    const html = `
      <div class="score">
        <div class="score__find-label">
          <span>Find: ${model.currentNoteBeingGuessed()}</span>
        </div>
        <div class="score__answer-totals">
          <div class="score__answer-totals-col">
            <span class="score__icon score__icon--correct">✔</span><span>${model.correctAnswers()}</span>
          </div>
          <div class="score__answer-totals-col">
            <span class="score__icon score__icon--incorrect">✘</span><span>${model.incorrectAnswers()}</span>
          </div>
        </div>
      </div>`;

    this.element.innerHTML = html;
  };
}

export default ScoreView;
