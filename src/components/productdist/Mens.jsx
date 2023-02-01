import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { getmensdata } from "../../Redux/AppReducer/action"
import "./mens.css"


const Mens = () => {
const mens = useSelector((store) => store.AppReducer.data)
    //console.log(mens)

    const [serachParams, setsearchParams] = useSearchParams();
    const initiasort = serachParams.getAll("sort")
    const dispatch = useDispatch()
    const location =useLocation()

    const [sort, setSort] = useState(initiasort[0] || "")

    const handleSort = (e) => {
        setSort(e.target.value)
    }
   
       useEffect(()=>{
if(location ||mens.length===0){
    const sortBy=serachParams.get("sort")
    const getdataParams={
        params:{
            _sort :sortBy && "price",
            _order:sortBy
        }
    }
    dispatch(getmensdata(getdataParams))
}
    },[mens.length,dispatch,location.search])

    useEffect(() => {
        let params = {};
        sort && (params.sort = sort)
        setsearchParams(params)
    }, [setsearchParams, sort])

    //console.log(mens)
    return (
        <div>
            <div className="designerman" >
                <h1 >Designer Clothing for Men</h1>
                <p style={{ fontSize: "11.9px", marginTop: "25px",fontWeight:"bold" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
            </div>

            {/* /////////////////////// */}

         {/* ------------------------------------------------fitering part----------------------------------------------- */}
            <div className="filter">

                <div  className="filterbox">
                    <h4>MODESENS/SHOP/MENS/CLOTHING</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ fontWeight: "bold", fontSize: "13px", marginLeft: "30px" ,color:"black",marginTop:"22px"}}>10,000+ ITEMS</p>
                        <img  src="https://cdn-icons-png.flaticon.com/512/54/54481.png" style={{marginTop:"22px",width:"18px",height:"20px" ,marginRight: "40px"}} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" ,marginTop:"5px"}}>
                        <p style={{ color: "red", fontWeight: "bold", fontSize: "13px", marginLeft: "30px" }}>Sort By:</p>
                        <p style={{ color: "black", fontWeight: "bold", fontSize: "13px", marginRight: "40px" }}>Reset</p>
                    </div>

                    {/* -------------------------------------sort--------------------------------------- */}
                    <div onClick={handleSort}style={{ marginLeft: "30px",fontSize: "13px",marginTop:"10px" }}>
                        <h3 style={{fontSize: "11.9px" ,fontWeight:"bold",color:"red"}}>Price</h3>
                        <input type="radio" value="asc" name="sortBy" defaultChecked={sort === "asc"} style={{marginRight:"7px",marginTop:"5px"}}/>
                    <label style={{fontWeight:"bold"}}>Low to High</label>
                    <br />
                    <input type="radio" value="desc" name="sortBy" defaultChecked={sort === "desc"} style={{marginRight:"7px"}} />
                    <label style={{fontWeight:"bold"}}>High to Low</label></div>  

                    <div className="save_btn" style={{marginTop:"10px"}}>
                        <Button>SAVE MY SEARCH</Button></div>                  
                    <div  className="related">
                        <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "15px" ,marginTop:"10px",marginBottom:"10px"}}>Related Category</h3>
                        <p>Men</p>
                        <p>Men Activewear</p>
                        <p>Men Bitchewear</p>
                        <p>Men Coats</p>
                        <p>Men Jackets</p>
                       
                    </div>
                    <div className='related'>
                        <h3 style={{ color: "black", fontWeight: "bold", fontSize: "11.9px", marginLeft: "15px", marginTop: "10px", marginBottom: "10px" }}>Related Searches</h3>
                        <p>Gucci Men Clothing</p>
                        <p>Burberry Men Clothing</p>
                        <p>Alexander Mcqueen Men Clothing</p>
                       
                    </div>

                </div>

                <div className="productbox" >
                    {mens.length > 0 && mens.map(el => {
                        return  <Link to={`/details/${el.id}`}>
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

export default Mens