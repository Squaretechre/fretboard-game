const SettingsModel = observable => {
  let isVisible = false;

  const initialise = () => {
    observable.notify();
  };

  const addObserver = observer => {
    observable.addObserver(observer);
  };

  const toggleVisibility = () => {
    isVisible = !isVisible;
    observable.notify();
  };

  return {
    initialise,
    addObserver,
    isVisible: () => isVisible,
    toggleVisibility
  };
};

export default SettingsModel;
