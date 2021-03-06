const initialState = {};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case 'COMMENTS':
      return { ...state, comments: action.data };

    case 'COMMENTS/NEW':
      return { ...state, comments: [action.data, ...state.comments] };

    case 'LIST':
      return { ...state, list: action.data };

    case 'POST':
      return { ...state, post: action.data };

    default:
      return state;
  }
};

export default posts;
