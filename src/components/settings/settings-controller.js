
const SettingsController = (settingsModel) => {
  const toggleVisibility = () => {
    console.log('hellllo')
    settingsModel.toggleVisibility()
  };

  return {
    toggleVisibility 
  };
};

export default SettingsController;
