import * as types from './actionTypes'

const initialState = {
    data: [],
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
        default: return state
    }
}