import * as types from './actionTypes'
import axios from 'axios'

export const getproductdetreq = () => {
    return {

    }
}

export const getproddetailsSuccess = (data) => {
    return {

    }
}

export const getproddetailsFailure = () => {
    return {

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

  
  export {update,deleteDataFromCart,edit,getdata,addNewData}



