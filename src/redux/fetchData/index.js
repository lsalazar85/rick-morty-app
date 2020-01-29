import * as types from './types'
const initialState = {
    loading: false,
    list: [],
  }
  
const allData = (state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_DATA_SUCCESS:
        return {
          ...state,
          loading: true,
          list: action.payload,
        }
      default: return state
    }
  }

export default allData
  