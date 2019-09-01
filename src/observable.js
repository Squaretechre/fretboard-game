const Observable = () => {
  const observers = [];

  const notify = () => {
    observers.forEach(observer => observer.update());
  };

  const addObserver = observer => {
    observers.push(observer);
  };

  return {
    notify,
    addObserver
  };
};

export default Observable;
