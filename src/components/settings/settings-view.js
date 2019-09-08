function SettingsView(model, element) {
  this.model = model;
  this.element = element;

  this.model.addObserver(this);

  this.update = () => {
    const isVisible = model.isVisible();
    const html = `
      <input type="checkbox" class="menu__checkbox" ${
        isVisible ? "checked" : ""
      }/>
      <p class="menu__overlay">hi</p>`;

    this.element.innerHTML = '';
  };
}

export default SettingsView;
