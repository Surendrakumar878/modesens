import { Link } from "react-router-dom"
import Mens from "../components/Mens"

const Products=()=>{
    return(
        <div>
            {/* <div style={{display:"flex",margin:"auto" ,width:"40%"}}>
           <Link to="/women"><div style={{marginRight:"20px"}}>women</div></Link> 
           <Link to="/men"><div style={{marginRight:"20px"}}>men</div></Link> 
            <div style={{marginRight:"20px"}}>Kid</div>
            </div> */}
         <Mens/>

        </div>
    )
}
export default Products