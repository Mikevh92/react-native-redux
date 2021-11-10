import * as types from './types';

const actionCreators = {
  save_user: (datos) => {
    return {
      type: types.SAVE_USER,
      user: datos
    }
  }
}

export { actionCreators }