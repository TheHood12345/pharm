import { useState } from "react";
import { FaCartPlus, FaHistory, FaLeaf, FaList, FaMailBulk, FaMoon, FaPhone, FaProductHunt, FaSearch, FaStore, FaSun } from "react-icons/fa";
import Drawer from "./drawer";
import P_landing_1 from "./p_landing_1";
import { FaCartShopping, FaImagePortrait, FaWhatsapp } from "react-icons/fa6";

function P_landing(){

    const [drawer,set_drawer]=useState(false);
    const [drawer_height,set_drawer_height]=useState(0);
    const [day,set_day] = useState(true);
    const [num,set_num] = useState(0);
    return (
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
        <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 4px rgb(200,200,200)"}}>
            <div style={{width:"90%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <div style={{width:"70%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                    <FaLeaf size={30} color="aquamarine"/>
                    <div>PHARMACY</div>
                </div>
                <div style={{width:"20%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {day==false?<FaSun size={25}  style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_day(!day);
                    }}/>:
                    <FaMoon size={25}  style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_day(!day);
                    }}/>}
                </div>
                <div style={{width:"20%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end",position:"relative"}}>
                    <FaCartShopping size={25} style={{cursor:"pointer",zIndex:"2"}} title="Dashboard" onClick={()=>{
        
                    }}/>
                    <div style={{backgroundColor:"rgba(255,0,0,0.7)",zIndex:"1",color:"white",position:"absolute",top:"1%",fontSize:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",aspectRatio:"1/1",right:"0%",borderRadius:"100px",width:"50%",textAlign:"center"}}>{num}</div>
                </div>
                <div style={{width:"20%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {drawer==false?<FaImagePortrait size={25} style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_height(90);
                    }}/>:
                    <FaImagePortrait size={25} style={{cursor:"pointer"}} title="Dashboard" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_height(0);
                    }}/>}
                </div>
                <div style={{width:"20%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                    {drawer==false?<FaList size={25} style={{cursor:"pointer"}}  title="Menu" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_height(90);
                    }}/>:
                    <FaList size={25} style={{cursor:"pointer"}}  title="Menu" onClick={()=>{
                        set_drawer(!drawer);
                        set_drawer_height(0);
                    }}/>}
                </div>
            </div>
            
        </div>
        <div style={{width:"100%",height:"5%",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <FaSearch size={20} color="rgb(18,22,28)"/>
                    <input type="text" style={{paddingTop:"10px",paddingBottom:"10px",width:"90%",paddingLeft:"6px",paddingRight:"6px",border:"0px",backgroundColor:"transparent"}} placeholder="Search for medicines, brands or symptoms..."/>
                    </div>
        </div>
        <P_landing_1 day={day} set_num={set_num}/>

        {/* DRAWER */}
        {
            // drawer&&
            <Drawer drawer_height={drawer_height} drawer={drawer} set_drawer_height={set_drawer_height} set_drawer={set_drawer} day={day}/>
        }

        <div style={{position:"absolute",left:"2%",bottom:"10%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{background:"rgba(127, 255, 212, 0.7)",padding:"20px",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <FaWhatsapp size={20}/>
            </div>
            <div style={{background:"rgba(127, 255, 212, 0.7)",padding:"20px",marginTop:"10px",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <FaPhone size={20}/>
            </div>
        </div>
    </div>
    );
}

export default P_landing;