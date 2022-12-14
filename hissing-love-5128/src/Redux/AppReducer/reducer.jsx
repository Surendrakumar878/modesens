import * as types from './actionTypes'

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_PRODUCT_DETAILS_REQ: {
            return {
                ...state, isLoading: true
            }
        }

        case types.GET_PRODUCT_DETAILS_SUCCESS: {
            return {
                ...state, isLoading: false, data: payload
            }
        }

        case types.GET_PRODUCT_DETAILS_ERROR: {
            return {
                ...state, isLoading: false, isError: true, books: []
            }
        }
        default: return state
    }
}