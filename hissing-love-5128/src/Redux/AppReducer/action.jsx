import * as types from './actionTypes'
import axios from 'axios'

export const getbookRequest = () => {
    return {
        type: types.GET_BOOk_REQUEST
    }
}

export const getbookSuccess = (payload) => {
    return {
        type: types.GET_BOOk_SUCCESS,
        payload
    }
}

export const getbookFailure = () => {
    return {
        type: types.GET_BOOk_FAILURE
    }
}
export const getmensRequest = () => {
    return {
        type: types.GET_MENS_REQUEST
    }
}

export const getmensSuccess =(data)=> {
    return {
        type: types.GET_MENS_SUCCESS,
        payload:data
    }
}

export const getmensFailure = () => {
    return {
        type: types.GET_MENS_FAILURE
    }
}
export const getbook = (queryParams) => (dispatch) => {
    dispatch(getbookRequest());
    return axios.get("https://modesens-mocker-api.onrender.com/modesensdata", queryParams)
        .then((res) => {
            dispatch(getbookSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getbookFailure())
        })
}


export const getmensData = () => (dispatch) => {
    dispatch(getmensRequest());
    return axios.get("https://modesens-mocker-api.onrender.com/modesensdata")
        .then((res) => {
            // console.log(res.data)
            dispatch(getmensSuccess(res.data))
        })
        .catch((err) => {
            dispatch(getmensFailure())
        })
}

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