import { useState } from "react";
import { FaCartPlus, FaHistory, FaHome, FaLeaf, FaList, FaMailBulk, FaPhone, FaProductHunt, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

function Drawer({drawer_height,set_drawer_height,drawer,set_drawer,day}){

    return (
        <div style={{width:`100%`,height:`${drawer_height}%`,overflow:"hidden",transition:"all 0.3s linear",position:"absolute",top:"10%",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"end"}}>
                <div style={{width:"40%",height:"100%",backgroundColor:"transparent"}} onClick={()=>{
                    set_drawer(false);
                    set_drawer_height(0);
                }}></div>
                <div style={{width:"60%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",backgroundColor:"white",color:"rgb(18,22,28)"}}>
                    <div style={{width:"90%",height:"10%",marginTop:day==true?"0":"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start",backgroundColor:"white"}}>
                        <Link to="/signup" style={{color:"orange",cursor:"pointer",height:"100%",textDecoration:"none",width:"90%",border:"1px solid orange",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>Create account</Link>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                    </div>
                    <div style={{width:"90%",fontSize:"12px",height:"80%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",backgroundColor:"white"}}>
                      <div style={{width:"100%",height:"100%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>My Dashboard</div><FaHome/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>Make Order</div><FaCartPlus/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>Available Products</div><FaStore/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>Promotions</div><FaProductHunt/>
                            </div>
                        </div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>History</div><FaHistory/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>Call us</div><FaPhone/>
                            </div>
                        </div>
                        <div style={{width:"100%",textAlign:"center",marginTop:"4%"}}>OR</div>
                        <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                <div>Email us</div><FaMailBulk/>
                            </div>
                        </div>
                        <hr style={{width:"90%",border:"1px solid orange"}}/>
                        <div style={{width:"100%",borderRadius:"3px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                            <div style={{color:"orange"}}>Our addresses</div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                    <li>1 Shelter Afrique Estate, Uyo, Akwa Ibom State</li>
                                </ul>
                            </div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                    <li>Banana Island, Lagos State</li>
                                </ul>
                            </div>
                            <div style={{width:"100%",borderRadius:"3px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"4%",paddingTop:"1%",paddingBottom:"1%",cursor:"pointer"}}>
                                <ul style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingTop:"10px",paddingBottom:"10px"}}>
                                    <li>Transcorp Hilton, Abuja FCT</li>
                                </ul>
                            </div>
                        </div>
                        
                     </div>

                    </div>
                    <Link to="/login" style={{width:"100%",height:"10%",textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white"}}>
                        <div>Sign in</div>
                    </Link>
                </div>
                
            </div>
    );
}

export default Drawer;