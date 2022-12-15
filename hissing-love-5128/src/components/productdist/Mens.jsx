import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getmensdata } from "../../Redux/AppReducer/action"
import "./mens.css"


const Mens = () => {


const mens = useSelector((store) => store.AppReducer.data)
    console.log(mens)
    const dispatch = useDispatch()


    useEffect(() => {
      
        dispatch(getmensdata())

    }, [])
    console.log(mens)
    return (
        <div>
            <div className="designerman" >
                <h1 >Designer Clothing for Men</h1>
                <p style={{ fontSize: "11px", fontWeight: "bold", marginTop: "25px" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
            </div>

            {/* /////////////////////// */}
            <div className="filter" style={{ display: "flex", marginTop: "28px" }}>

                <div  className="filterbox">
                    <p >MODESENS/SHOP/MENS/CLOTHING</p>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginLeft: "20px" }}>10,000+ITEMS</p>
                        <img />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginLeft: "20px" }}>Filter By:</p>
                        <p style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginRight: "20px" }}>Reset</p>
                    </div>
                    <div>
                        <h3 style={{ color: "#8E8E8E", fontWeight: "bold", fontSize: "11.9px", marginLeft: "20px" }}>RELATEC CATEGORY</h3>
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
                    {mens.length > 0 && mens.map(el => {
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

export default Mens