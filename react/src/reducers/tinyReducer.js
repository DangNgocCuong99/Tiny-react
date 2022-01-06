import * as types from '../constants'
const initialState = {
    isFetching: false,
    listData: [],
    error: false,
    errorMessage: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case types.GET_TINY_REQUEST:
        case types.CREATE_TINY_REQUEST:
        case types.UPDATE_TINY_REQUEST:
        case types.DELETE_TINY_REQUEST:
            return { ...state, isFetching: true }

        case types.GET_TINY_SUCCESS:
            return { ...state, listData: action.payload.listData }

        case types.CREATE_TINY_SUCCESS:
        case types.DELETE_TINY_SUCCESS:
        case types.UPDATE_TINY_SUCCESS:
            return { ...state, }
            
        case types.GET_TINY_FAILURE:
        case types.CREATE_TINY_FAILURE:
        case types.UPDATE_TINY_FAILURE:
        case types.DELETE_TINY_FAILURE:
            return { ...state, error: true, errorMessage: action.payload.errorMessage }

        default:
            return state
    }
}
