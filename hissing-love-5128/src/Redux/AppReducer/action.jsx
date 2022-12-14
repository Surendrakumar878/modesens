
  import * as types from './actionTypes'
  import axios from 'axios'
  
  export const getbookRequest = () => {
      return {
          type: types.GET_DATA_REQUEST
      }
  }
  
  export const getbookSuccess = (payload) => {
      return {
          type: types.GET_DATA_SUCCESS,
          payload
      }
  }
  
  export const getbookFailure = () => {
      return {
          type: types.GET_DATA_FAILURE
      }
  }
  
   const getdata = () => (dispatch) => {
      dispatch(getbookRequest());
      return axios.get("https://modesens-mocker-api.onrender.com/modesensdata")
          .then((res) => {
              console.log(res.data)
              dispatch(getbookSuccess(res.data))
          })
          .catch((err) => {
              // dispatch(getbookFailure())
          })
  }
  const getmensdata = () => (dispatch) => {
    dispatch(getbookRequest());
    return axios.get(" https://modesens-mocker-api.onrender.com/modesensdata?category=mens")
        .then((res) => {
            console.log(res.data)
            dispatch(getbookSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getbookFailure())
        })
}
const getwomensdata = () => (dispatch) => {
    dispatch(getbookRequest());
    return axios.get(" https://modesens-mocker-api.onrender.com/modesensdata?category=womens")
        .then((res) => {
            console.log(res.data)
            dispatch(getbookSuccess(res.data))
        })
        .catch((err) => {
            // dispatch(getbookFailure())
        })
}
  const edit=(payload)=>(dispatch) => {
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
    const deleteDataFromCart = (queryParams) => (dispatch) =>  {
      // console.log(id)
      return axios.delete(`https://modesens-mocker-api.onrender.com/modesensdata/${queryParams}`);
    };
    
    const update =  (queryParams) => (dispatch) => {
     
     return axios.patch(`https://modesens-mocker-api.onrender.com/modesensdata/${queryParams}`).then((r)=>{
        console.log(r.data)
      })
    };
  
    const addNewData =  (queryParams) => (dispatch) => {
     
      return axios
      .post(`https://modesens-mocker-api.onrender.com/modesensdata/${queryParams}`)
      .then((res) => {
        // setProduct(res.data)
       
        // console.log(res.data);
        alert("Add data successfully");
      })
      .catch((e) => {
        console.log(e);
      });
     };
  
    
    export {update,deleteDataFromCart,edit,getdata,addNewData,getmensdata,getwomensdata}
  



