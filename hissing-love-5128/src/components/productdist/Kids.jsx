import React, { useEffect, useState } from 'react'
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getkidsdata } from '../../Redux/AppReducer/action'
import "./mens.css"
import { Button } from '@chakra-ui/react'

export const Kids = () => {
    const kids = useSelector((store) => store.AppReducer.data)
    const [serachParams, setsearchParams] = useSearchParams();
    const initiasort = serachParams.getAll("sort")
    const location = useLocation()
    const [sort, setSort] = useState(initiasort[0] || "")
    const dispatch = useDispatch()
    const handleSort = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        if (location || kids.length === 0) {
            const sortBy = serachParams.get("sort")
            const getdataParams = {
                params: {
                    _sort: sortBy && "price",
                    _order: sortBy
                }
            }
            dispatch(getkidsdata(getdataParams))
        }
    }, [kids.length, dispatch, location.search])

    useEffect(() => {
        let params = {};
        sort && (params.sort = sort)
        setsearchParams(params)
    }, [setsearchParams, sort])

    return (
        <div>
            <div className="designerman" >
                <h1 >Designer Products for Kids</h1>
                <p style={{ fontSize: "11.9px", marginTop: "25px" ,fontWeight:"bold" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
            </div>
            <div className="filter" style={{ display: "flex", marginTop: "28px" }}>

                <div className="filterbox">
                    <h4>MODESENS/SHOP/MENS/CLOTHING</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginLeft: "30px", marginTop: "22px" }}>10,000+ITEMS</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" style={{ marginTop: "22px", width: "18px", height: "20px", marginRight: "40px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginLeft: "30px" }}>Sort By:</p>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginRight: "40px" }}>Reset</p>
                    </div>
                    <div onClick={handleSort} style={{ marginLeft: "30px", fontSize: "13px", marginTop: "10px" }}>
                        <h3 style={{ fontSize: "11.9px", fontWeight: "bold" }}>Price</h3>
                        <input type="radio" value="asc" name="sortBy" defaultChecked={sort === "asc"} style={{ marginRight: "7px", marginTop: "5px" }} />
                        <label>Ascending</label>
                        <br />
                        <input type="radio" value="desc" name="sortBy" defaultChecked={sort === "desc"} style={{ marginRight: "7px" }} />
                        <label>Descending</label></div>
                        <div className="save_btn" style={{marginTop:"10px"}}>
                        <Button>SAVE MY SEARCH</Button></div>     
                    <div className='related'>
                        <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "15px", marginTop: "10px", marginBottom: "10px" }}>Related Category</h3>
                        <p>Kids</p>
                        <p>Kids Activewear</p>
                        <p>Kids Bitchewear</p>
                        <p>Kids Coats</p>
                        <p>Kids Jackets</p>
                        <p>Kids Jeans</p>
                        <p>Kids Jeans</p>
                    </div>
                    <div className='related'>
                        <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "15px", marginTop: "10px", marginBottom: "10px" }}>Related Searches</h3>
                        <p>Gucci Kids Clothing</p>
                        <p>Burberry Kids Clothing</p>
                        <p>Alexander Mcqueen Kids Clothing</p>
                        <p>Fendi Kids Clothing</p>
                        <p>Valentino Kids Clothing</p>
                        <p>Balenciaga Kids Clothing</p>
                        <p>Saint Laurent Kids Clothing</p>
                        <p>Prada Kids Clothing</p>
                        <p>Versace Kids Clothing</p>
                    </div>

                </div>

                <div className="productbox" >
                    {kids.length > 0 && kids.map(el => {
                        return  <Link to={`/details/${el.id}`}>
                        <div key={el.id} >
                        <img src={el.image} />
                        <h3 >{el.title}</h3>
                        <p><span>$169(60% OFF)</span>-${el.price}</p>
                        <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginTop: "16px", marginBottom: "8px" }}>Compare 22 stores</p>
                    </div></Link>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Kids
