import * as types from './actionTypes'

const initialState = {
    data: [],
    men:[],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

            return {
                ...state, isLoading: true
            }
        }


            return {
                ...state, isLoading: false, data: payload
            }
        }


            return {
                ...state, isLoading: false, isError: true, books: []
            }
        }

        case types.GET_MENS_REQUEST: {
            return {
                ...state, isLoading: true
            }
        }
        case types.GET_MENS_SUCCESS: {
            return {
                ...state, isLoading: false, men:payload
            }
        }
        case types.GET_MENS_FAILURE: {
            return {
                ...state,  isError: true
            }
        }
        default: return state
    }
}