import * as types from './types';

const initialState = {
  user: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default reducer;