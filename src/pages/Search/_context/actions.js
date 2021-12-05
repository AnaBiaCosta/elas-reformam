export const ACTION_TYPES = {
  SEARCH_LIST_REQUEST: 'SEARCH_LIST_REQUEST',
  SEARCH_LIST_REQUEST_SUCCESS: 'SEARCH_LIST_REQUEST_SUCCESS',
  SEARCH_LIST_REQUEST_ERROR: 'SEARCH_LIST_REQUEST_ERROR',
  STATES_LIST_REQUEST: 'STATES_LIST_REQUEST',
  STATES_LIST_REQUEST_SUCCESS: 'STATES_LIST_REQUEST_SUCCESS',
  STATES_LIST_REQUEST_ERROR: 'STATES_LIST_REQUEST_ERROR'
}

export const getProfessionalsListAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST,
  payload
})

export const successAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST_SUCCESS,
  payload
})

export const errorAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST_ERROR,
  payload
})

export const getStatesListAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST,
  payload
})

export const successStatesAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST_SUCCESS,
  payload
})

export const errorStatesAction = payload => ({
  type: ACTION_TYPES.SEARCH_LIST_REQUEST_ERROR,
  payload
})

// export const getProfessionalsListAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST,
//   payload
// })

// export const successAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST_SUCCESS,
//   payload
// })

// export const errorAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST_ERROR,
//   payload
// })

// export const getProfessionalsListAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST,
//   payload
// })

// export const successAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST_SUCCESS,
//   payload
// })

// export const errorAction = payload => ({
//   type: ACTION_TYPES.SEARCH_LIST_REQUEST_ERROR,
//   payload
// })
