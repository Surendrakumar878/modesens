import { Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { getwomensdata } from '../../Redux/AppReducer/action'
import "./mens.css"

export const Womens = () => {
    const womens = useSelector((store) => store.AppReducer.data)
    const [serachParams, setsearchParams] = useSearchParams();
    const initiasort = serachParams.getAll("sort")
    const location = useLocation()
    const [sort, setSort] = useState(initiasort[0] || "")

    const dispatch = useDispatch()


    const handleSort = (e) => {
        setSort(e.target.value)
    }

    useEffect(() => {
        if (location || womens.length === 0) {
            const sortBy = serachParams.get("sort")
            const getdataParams = {
                params: {
                    _sort: sortBy && "price",
                    _order: sortBy
                }
            }
            dispatch(getwomensdata(getdataParams))
        }
    }, [womens.length, dispatch, location.search])

    useEffect(() => {
        let params = {};
        sort && (params.sort = sort)
        setsearchParams(params)
    }, [setsearchParams, sort])


    return (
        <div>
            <div className="designerman" >
                <h1 >Designer Clothing for Women</h1>
                <p style={{ fontSize: "11.9px", marginTop: "25px", fontWeight: "bold" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
            </div>
            <div className="filter" >

                <div className="filterbox">
                    <h4>MODESENS/SHOP/MENS/CLOTHING</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginLeft: "30px", marginTop: "22px" }}>10,000+ITEMS</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" style={{ marginTop: "22px", width: "18px", height: "20px", marginRight: "40px" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                        <p style={{ color: "red", fontWeight: "bold", fontSize: "13px", marginLeft: "30px" }}>Sort By:</p>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginRight: "40px" }}>Reset</p>
                    </div>
                    <div onClick={handleSort} style={{ marginLeft: "30px", fontSize: "13px", marginTop: "10px" }}>
                        <h3 style={{ fontSize: "11.9px", fontWeight: "bold",color:"red" }}>Price</h3>
                        <input type="radio" value="asc" name="sortBy" defaultChecked={sort === "asc"} style={{ marginRight: "7px", marginTop: "5px" }} />
                        <label style={{fontWeight:"bold"}}>Low to High</label>
                        <br />
                        <input type="radio" value="desc" name="sortBy" defaultChecked={sort === "desc"} style={{ marginRight: "7px" }} />
                        <label style={{fontWeight:"bold"}}>High to Low</label></div>
                        <div className="save_btn" style={{marginTop:"10px"}}>
                        <Button>SAVE MY SEARCH</Button></div>     
                    <div className='related'>
                        <h3 >Related Category</h3>
                        <p>Women</p>
                        <p>Women Activewear</p>
                        <p>Women Bitchewear</p>
                        <p>Women Coats</p>
                        <p>Women Jackets</p>
                        <p>Women Jeans</p>
                       
                    </div>
                    <div className='related'>
                        <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "15px", marginTop: "10px", marginBottom: "10px" }}>Related Searches</h3>
                        <p>Gucci Women Clothing</p>
                        <p>Burberry Women Clothing</p>
                        <p>Alexander Mcqueen Women Clothing</p>
                    </div>

                </div>

                <div className="productbox" >
                    {womens.length > 0 && womens.map(el => {
                        return <Link to={`/details/${el.id}`}>
                        <div key={el.id} >
                        <img src={el.image} />
                        <h3 >{el.title}</h3>
                        <p>{"₹"+el.price}</p>
                       <Button>ADD  TO  BAG</Button>
                    </div></Link>
                    })}
                </div>
            </div>
        </div>

    )
}
