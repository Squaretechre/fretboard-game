function NeckView(element, model, scoreAnswer) {
  this.model = model;
  this.element = element;
  this.model.addObserver(this);

  const noteLabelFor = note => {
    const noteLabel = document.createElement("span");
    noteLabel.textContent = note;

    noteLabel.addEventListener(
      "animationend",
      () => {
        noteLabel.remove();
      },
      true
    );

    noteLabel.classList.add("neck__note", "fadeOutUp", "animated");

    return noteLabel;
  };

  const createStringView = fret => {
    return `<div class="neck__string">
    <button
      data-note="${fret.name}"
      data-octave="${fret.octave}"
      data-string="${fret.string}"
      class="neck__button
      ${fret.visible ? "" : "neck__button--hidden"}
      ${fret.incorrectAnswers() > 5 ? "neck__button--warn" : ""}
      ${fret.lastGuessedIncorrectly() ? "shake animated" : ""}
      ">
    </button>
  </div>`;
  };

  this.update = () => {
    const html = `<div class="neck">
    <div class="neck__fret">
      <div class="neck__string">Open</div>
      <div class="neck__string">
        <p>E</p>
      </div>
      <div class="neck__string">
        <p>A</p>
      </div>
      <div class="neck__string">
        <p>D</p>
      </div>
      <div class="neck__string">
        <p>G</p>
      </div>
      <div class="neck__string">
        <p>B</p>
      </div>
      <div class="neck__string">
        <p>E</p>
      </div>
    </div>
      ${model.frets
        .map(
          (fret, index) => `
          <div class="neck__fret">
            <div class="neck__string">${index + 1}</div>
            ${createStringView(fret[0])}
            ${createStringView(fret[1])}
            ${createStringView(fret[2])}
            ${createStringView(fret[3])}
            ${createStringView(fret[4])}
            ${createStringView(fret[5])}
          </div>
        `
        )
        .reduce((current, next) => current + next)}
    </div>`;

    element.innerHTML = html;

    const buttons = Array.from(document.getElementsByClassName("neck__button"));

    buttons.forEach(button =>
      button.addEventListener("click", event => {
        const note = event.target.getAttribute("data-note");
        const octave = event.target.getAttribute("data-octave");
        const string = event.target.getAttribute("data-string");

        button.appendChild(noteLabelFor(note));

        scoreAnswer(note, octave, string);
      })
    );
  };
}

export default NeckView;
