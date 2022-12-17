import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getkidsdata } from '../../Redux/AppReducer/action'
import "./mens.css"

export const Kids = () => {
  const kids = useSelector((store) => store.AppReducer.data)
  const [serachParams, setsearchParams] = useSearchParams();
  const initiasort = serachParams.getAll("sort")  
  const location =useLocation()
  const [sort, setSort] = useState(initiasort[0] || "")
    const dispatch = useDispatch()
    const handleSort = (e) => {
        setSort(e.target.value)
    }
    
              useEffect(()=>{
    if(location ||kids.length===0){
        const sortBy=serachParams.get("sort")
        const getdataParams={
            params:{
                _sort :sortBy && "price",
                _order:sortBy
            }
        }
        dispatch(getkidsdata(getdataParams))
    }
        },[kids.length,dispatch,location.search])
    
        useEffect(() => {
            let params = {};
            sort && (params.sort = sort)
            setsearchParams(params)
        }, [setsearchParams, sort])
    
  return (
    <div>
    <div className="designerman" >
        <h1 >Designer Products for Kids</h1>
        <p style={{ fontSize: "11.9px", marginTop: "25px" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
    </div>
    <div className="filter" style={{ display: "flex", marginTop: "28px" }}>

        <div  className="filterbox">
        <h4>MODESENS/SHOP/MENS/CLOTHING</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "13px", marginLeft: "30px" }}>10,000+ITEMS</p>
                <img  src="https://cdn-icons-png.flaticon.com/512/54/54481.png" style={{marginTop:"22px",width:"11px",height:"20px" ,marginRight: "40px"}} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "20px" }}>Filter By:</p>
                <p style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginRight: "20px" }}>Reset</p>
            </div>
            <div onClick={handleSort}style={{ marginLeft: "30px",fontSize: "13px",marginTop:"10px" }}>
                        <h3 style={{fontSize: "11.9px" ,fontWeight:"bold"}}>Price</h3>
                        <input type="radio" value="asc" name="sortBy" defaultChecked={sort === "asc"} style={{marginRight:"7px",marginTop:"5px"}}/>
                    <label>Ascending</label>
                    <br />
                    <input type="radio" value="desc" name="sortBy" defaultChecked={sort === "desc"} style={{marginRight:"7px"}} />
                    <label>Descending</label></div>
            <div  className='related'>
                <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "20px" }}>RELATEC CATEGORY</h3>
                <p>Men</p>
                <p>Men Activewear</p>
                <p>Men Bitchewear</p>
                <p>Men Coats</p>
                <p>Men Jackets</p>
                <p>Men Jeans</p>
                <p>Men Jeans</p>
            </div>

        </div>

        <div className="productbox" >
            {kids.length > 0 && kids.map(el => {
                return <div key={el.id} >
                    <img src={el.image} />
                    <h3 >{el.title}</h3>
                    <p><span>$169(60% OFF)</span>-${el.price}</p>
                    <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginTop: "16px", marginBottom: "8px" }}>Compare 22 stores</p>
                </div>
            })}
        </div>
    </div>
</div>

  )
}

export default Kids
