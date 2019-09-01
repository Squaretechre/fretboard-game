const neckView = (element, model, scoreAnswer) => {
  const update = () => {
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
      ${model
        .map(
          (fret, index) => `
          <div class="neck__fret">
            <div class="neck__string">${index + 1}</div>
            <div class="neck__string">
              <button
                data-note="${fret[0].note}"
                data-octave="${fret[0].octave}" class="neck__button">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[1].note}"
                data-octave="${fret[1].octave}" class="neck__button">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[2].note}"
                data-octave="${fret[2].octave}" class="neck__button">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[3].note}"
                data-octave="${fret[3].octave}" class="neck__button">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[4].note}"
                data-octave="${fret[4].octave}" class="neck__button">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[5].note}"
                data-octave="${fret[5].octave}" class="neck__button">
              </button>
            </div>
        </div>
        `
        )
        .reduce((current, next) => current + next)}
    </div>`;

    element.innerHTML = html;

    const buttons = Array.from(document.getElementsByClassName("neck__button"));

    buttons.forEach(button =>
      button.addEventListener("click", event => {
        const note = button.getAttribute("data-note");
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

        button.appendChild(noteLabel);

        const answer = event.target.getAttribute("data-note");
        const octave = event.target.getAttribute("data-octave");

        scoreAnswer(answer, octave);
      })
    );
  };

  return {
    update
  };
};

export default neckView;
