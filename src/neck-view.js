const neckView = (element, model, scoreAnswer) => {
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
      ${model.frets
        .map(
          (fret, index) => `
          <div class="neck__fret">
            <div class="neck__string">${index + 1}</div>
            <div class="neck__string">
              <button
                data-note="${fret[0].name}"
                data-octave="${fret[0].octave}"
                data-string="${fret[0].string}"
                class="neck__button ${
                  fret[0].visible ? "" : "neck__button--hidden"
                }">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[1].name}"
                data-octave="${fret[1].octave}"
                data-string="${fret[1].string}"             
                class="neck__button ${
                  fret[1].visible ? "" : "neck__button--hidden"
                }">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[2].name}"
                data-octave="${fret[2].octave}"
                data-string="${fret[2].string}"
                class="neck__button ${
                  fret[2].visible ? "" : "neck__button--hidden"
                }">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[3].name}"
                data-octave="${fret[3].octave}"
                data-string="${fret[3].string}"
                class="neck__button ${
                  fret[3].visible ? "" : "neck__button--hidden"
                }">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[4].name}"
                data-octave="${fret[4].octave}"
                data-string="${fret[4].string}"
                class="neck__button ${
                  fret[4].visible ? "" : "neck__button--hidden"
                }">
              </button>
            </div>
            <div class="neck__string">
              <button
                data-note="${fret[5].name}"
                data-octave="${fret[5].octave}"
                data-string="${fret[5].string}"
                class="neck__button ${
                  fret[5].visible ? "" : "neck__button--hidden"
                }">
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
        const note = event.target.getAttribute("data-note");
        const octave = event.target.getAttribute("data-octave");
        const string = event.target.getAttribute("data-string");

        button.appendChild(noteLabelFor(note));

        scoreAnswer(note, octave, string);
      })
    );
  };

  return {
    update
  };
};

export default neckView;
