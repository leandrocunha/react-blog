const initialState = { show: false };

const notifier = (state = initialState, { type, data }) => {
  switch (type) {
    case 'NOTIFIER/CLOSE':
      return { ...state, show: false };

    case 'NOTIFIER/SHOW':
      return { ...state, ...data, show: true };

    default:
      return state;
  }
};

export default notifier;
