import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getmensData } from "../Redux/AppReducer/action"

const Mens = () => {


    const mens = useSelector((store) => store.AppReducer.men)
    console.log(mens)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log("data")
        dispatch(getmensData())
    
    }, [])
    console.log(mens)
    return (
        <div>
            <div style={{ margin: "auto", width: "57%" }}>
                <h1 style={{ fontSize: "28px" }}>Designer Clothing for Men</h1>
                <p style={{ fontSize: "11px", fontWeight: "bold", marginTop: "14px" }}>Shop designer clothing for men with price comparison across 500+ stores in one place. Discover the latest designer clothing for men at ModeSens.</p>
            </div>

            {/* /////////////////////// */}
            <div style={{ display: "flex", border: "1px solid red" }}>

                <div style={{ display: "flex", border: "1px solid red", width: "300px" }}></div>

                <div style={{ border: "1px solid red", width: "100%", display: "flex", height: "500px" }}>
                {mens.length>0 && mens.map(el=>{
                return <div key={el.id}>
                  <div>{el.title}</div>
                 </div>
            })}
                </div>
            </div>
        </div>

    )
}

export default Mens