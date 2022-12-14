import * as types from './actionTypes'
import axios from 'axios'

// -------------------------------for product description page dont change------------------------------------
export const getproductdetreq = () => {
    return {
        type: types.GET_PRODUCT_DETAILS_REQ
    }
}

export const getproddetailsSuccess = (data) => {
    return {
        type: types.GET_PRODUCT_DETAILS_SUCCESS,
        payload:data
    }
}

export const getproddetailsFailure = () => {
    return {
        type: types.GET_PRODUCT_DETAILS_ERROR
    }
}

export const getproddetails = (id) => (dispatch) => {
    dispatch(getproductdetreq());
    return axios.get(`https://modesens-mocker-api.onrender.com/modesensdata?id=${id}`)
        .then((res) => {
            dispatch(getproddetailsSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getproddetailsFailure())
        })
}

export {getproddetails};

// -------------------------------for product description page dont change------------------------------------


export const edit=(payload)=>(dispatch) => {
    axios.patch(`https://modesens-mocker-api.onrender.com/modesensdata/${payload.id}`,{book_name:payload.edit})
          .then((res) => {
            console.log(res.data)
            dispatch(getbookSuccess(res.data))
              // dispatch(getbookSuccess(res.data))
            alert("edit") 
          })
          .catch((err) => {
              // dispatch(getbookFailure())
          })
  
  }
//   export function addTodo(todo) {
//     return function(dispatch) {
//         if (todo) {
//             const payload = {
//                 title: todo,
//                 status: false,
//             };
//             dispatch(addTodoRequest());
//             return axios
//                 .post("http://localhost:8080/todos", payload)
//                 .then((r) => {
//                     console.log("Response from post request", r);
//                     dispatch(addTodoSuccess());
//                     return "Masai School";
//                 })
//                 .catch((e) => {
//                     dispatch(addTodoError());
//                 });
//         }
//     };
// }