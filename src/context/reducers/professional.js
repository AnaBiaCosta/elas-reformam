import { STORE_STATUS } from '../../constants'
import { ACTION_TYPES } from '../actions/professional'

export const ProfessionalReducer = ({ professional }, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.PROFESSIONAL_DETAILS_REQUEST:
      return {
        ...professional,
        status: STORE_STATUS.LOADING
      }

    case ACTION_TYPES.PROFESSIONAL_DETAILS_REQUEST_SUCCESS:
      return {
        ...professional,
        status: STORE_STATUS.SUCCESS,
        data: payload
      }
    
    case ACTION_TYPES.PROFESSIONAL_DETAILS_REQUEST_ERROR:
      return {
        ...professional,
        status: STORE_STATUS.FAILURE,
        error: payload
      }

    default:
      return professional
  }
}

ProfessionalReducer.key = 'professional'

ProfessionalReducer.initialState = {
  status: STORE_STATUS.IDLE,
  data: {},
  error: null
}
