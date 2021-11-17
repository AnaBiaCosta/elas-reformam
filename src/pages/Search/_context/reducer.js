import { STORE_STATUS } from '../../../constants/status'
import { ACTION_TYPES } from './actions'

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SEARCH_LIST_REQUEST:
      return {
        ...state,
        status: STORE_STATUS.LOADING
      }

    case ACTION_TYPES.SEARCH_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        status: STORE_STATUS.SUCCESS,
        data: [...state.data, ...payload]
      }

    case ACTION_TYPES.SEARCH_LIST_REQUEST_ERROR:
      return {
        ...state,
        status: STORE_STATUS.FAILURE,
        error: payload
      }

    default:
      return state
  }
}

Reducer.initialState = {
  status: STORE_STATUS.IDLE,
  data: [],
  error: null
}
