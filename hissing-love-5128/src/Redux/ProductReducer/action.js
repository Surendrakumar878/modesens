import * as types from './actionTypes'
import axios from 'axios'


export const getproddetailsreq = () => {
    return {
        type: types.GET_PROD_DETAILS_REQUEST
    }
}

export const getproddetailsSuccess = (data) => {
    return {
        type: types.GET_PROD_DETAILS_SUCCESS,
        payload:data
    }
}

export const getproddetailsFailure = () => {
    return {
        type: types.GET_PROD_DETAILS_FAILURE
    }
}

 const getproddata = (id) => (dispatch) => {
    // console.log(id.id)
    dispatch(getproddetailsreq());
    return axios.get(`https://modesens-mocker-api.onrender.com/modesensdata?id=${id.id}`)
        .then((res) => {
            //  console.log(res.data)
            dispatch(getproddetailsSuccess(res.data))
        })
        .catch((err) => {
 dispatch(getproddetailsFailure())
        })
}

export {getproddata};