import { FaArrowRight, FaCaretRight, FaCartPlus, FaCertificate, FaImage, FaLeaf, FaPlus, FaSearch } from "react-icons/fa";
import { /*useNavigation*/ Link } from "react-router-dom";
import {useState,useEffect,useRef} from "react";

function P_landing_1({day,set_num}){

    // const navigate = useNavigation();
    const [promo_width,set_promo_width] = useState(100);
    const [m,set_m] = useState(0);
    const lis = ["promo1.svg","promo2.svg","/im2.png","/im3.jpg","/im4.png","/im_sand.svg"];
    const [promo_images,set_promo_images] = useState([lis[0],lis[1],lis[2]]);
    const [promo_bool,set_promo_bool] = useState(false);
    const [promo_indexes,set_promo_indexes] = useState(["Fast, Reliable & Secure Delivery!","24 Hours Customer Support","Certified & Trusted","Quality in Service Delivery"]);
    const [promo_image,set_promo_image] = useState("/im4.png");
    const scrollRef = useRef(null);
    const [scroll_num,set_scroll_num]=useState(0);
    const all = [
        {title:"New Arrivals",content:[
            {name:"Paracetamol 500mg",old_price:"500",new_price:"450",company:"Emzor",type:"Tablet (30s)",in_stock:true},
            {name:"Panadol Extra 200mg",old_price:"300",new_price:"200",company:"Emzor",type:"Tablet",in_stock:true},
            {name:"Amatem softgel",new_price:"450",company:"Medicare",type:"Tablet",in_stock:false},
            {name:"Ciprotab",old_price:"1700",new_price:"1500",company:"Medicare",type:"Cyrup",in_stock:true}
        ]
        },
        {title:"Discount sales",content:[
            {name:"Paracetamol 500mg",old_price:"500",new_price:"450",company:"Emzor",type:"Tablet (30s)",in_stock:true},
            {name:"Panadol Extra 200mg",old_price:"300",new_price:"200",company:"Emzor",type:"Tablet",in_stock:true},
        ]
        }
    ]
    useEffect(()=>{
        setTimeout(()=>{
                if(scroll_num>2){
                    scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 0;
                }else{
                    scrollRef.current.scrollLeft += scrollRef.current.clientWidth;
                }
                set_promo_bool(!promo_bool);
                if(scroll_num>2){
                    set_scroll_num(0);
                }else{
                    set_scroll_num(num=>num+=1);
                }
        },3000);


    },[promo_bool]);

    return (
        <div style={{width:"100%",height:"85%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white",position:"relative",scrollSnapType:"y mandatory"}}>

            <div style={{width:"90%",position:"relative",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(240,240,240,0)",borderRadius:"10px"}}>
                <div ref={scrollRef} style={{width:"90%",scrollBehavior:"smooth",display:"flex",flexDirection:"row",alignItems:"center",position:"relative",overflow:"scroll",gap:"10px",scrollSnapType:"x mandatory"}}>
                    {
                        promo_indexes.map((item,index)=>{
                            return (
                                <div key={index} style={{width:"100%",flex:"0 0 100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"10px",position:"relative",scrollSnapAlign:"center",transition:"all 1s linear"}}>
                                    {/* <img src={item} onError={(e)=>{
                                       //e.target.src="/vitamin.svg";
                                       e.target.style.opacity="0";
                                    }} alt="Promo" style={{width:`${promo_width}%`,aspectRatio:"2/1",borderRadius:"10px"}}/>
                                   <div style={{position:"absolute",backgroundColor:"rgba(18,22,28,0.8)",color:"white",width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",bottom:"20%",left:"10%",cursor:"pointer"}}>Open now<FaArrowRight/></div> */}
                                    <div style={{width:"100%",display:"flex",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"orange"}}>
                                        <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to right,red,orange)",color:"transparent",backgroundClip:"text",verflow:"scroll",borderBottom:"0.1px solid orange",fontSize:"20px",textAlign:"center",marginBottom:"20px"}}>{item}</div>
                                    </div>
                                </div>
                           )
                       })

                    //   [1,2,3].map((item,index)=>{
                    //     <div key={index} style={{width:"100%",height:"100px",display:"flex",flex:"0 0 90%",paddingTop:"5px",paddingBottom:"5px",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"orange",backgroundColor:"red"}}>
                    //         <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to right,red,orange)",color:"transparent",backgroundClip:"text",verflow:"scroll",borderBottom:"0.1px solid orange",fontSize:"20px",textAlign:"center",marginBottom:"20px"}}>Fast, Reliable & Secure Delivery!</div>
                    //     </div>

                    //   })
                    }
                </div>
                <div style={{position:"absolute",color:"white",width:"30%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",bottom:"1%",left:"0%",cursor:"pointer"}}>
                    <div style={{backgroundColor:scroll_num==0?"rgba(18,22,28,0.4)":"transparent",border:scroll_num==0?"0px":"1px solid rgba(18,22,28,0.4)",padding:"3px",borderRadius:"100px",cursor:"pointer"}}></div>
                    <div style={{backgroundColor:scroll_num==1?"rgba(18,22,28,0.4)":"transparent",border:scroll_num==1?"0px":"1px solid rgba(18,22,28,0.4)",padding:"3px",borderRadius:"100px",cursor:"pointer"}}></div>
                    <div style={{backgroundColor:scroll_num==2?"rgba(18,22,28,0.4)":"transparent",border:scroll_num==2?"0px":"1px solid rgba(18,22,28,0.4)",padding:"3px",borderRadius:"100px",cursor:"pointer"}}></div>
                    <div style={{backgroundColor:scroll_num==3?"rgba(18,22,28,0.4)":"transparent",border:scroll_num==3?"0px":"1px solid rgba(18,22,28,0.4)",padding:"3px",borderRadius:"100px",cursor:"pointer"}}></div>
                </div>
            </div>

            {/* <div style={{width:"100%",display:"flex",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"orange"}}>
                <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to right,red,orange)",color:"transparent",backgroundClip:"text",verflow:"scroll",borderBottom:"0.1px solid orange",fontSize:"20px",textAlign:"center",marginBottom:"20px"}}>Fast, Reliable & Secure Delivery!</div>
            </div> */}

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundImage:"linear-gradient(to right,red,orange)",borderRadius:"10px",marginTop:"4px",color:"white"}}>
                <div style={{width:"70%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaCartPlus/>MAKE ORDER</div>
            </div>

            <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"arial,sans-serif",fontWeight:"bold"}}>Browse Categories</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"90%",aspectRatio:"4/1",display:"flex",flexDirection:"row",overflowX:"auto",gap:"10px",scrollSnapType:"x mandatory"}}>
                    {
                        ["Prescriptions","OTC","Wellness","Vitamins","First Aid","Personal Care","Skin Care","Energy","Antibiotics"].map((item,index)=>{
                            return (
                                <div key={index} style={{width:"10%",flex:"0 0 25%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",scrollSnapAlign:"center",cursor:"pointer"}}>  
                                    <div style={{width:"100%",height:"70%",background:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            {/* <FaLeaf size={20} color={"rgb(200,200,200)"}/> */}
                                            <img src={item=="Vitamins"?"/vitamin.svg":item=="First Aid"?"/first_aid.svg":"/pill.svg"} onError={(e)=>{
                                                e.target.style.opacity="0";
                                            }} alt="category" style={{width:"100%",aspectRatio:"1/1"}}/>
                                        </div>
                                    </div>
                                    <div style={{width:"100%",height:"30%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textWrap:"nowrap"}}>
                                        <div style={{fontSize:"10px"}}>{item}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            

            <hr style={{width:"80%"}}/>
         
            {
                all.map((item,index)=>{return (
            <div key={index} style={{width:"100%",height:"60%",paddingTop:"20px",paddingBottom:"20px",marginTop:"0px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:day==true?"rgb(18,22,28)":"white"}}>
                <div style={{width:"90%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{fontFamily:"arial,sans-serif",fontWeight:"bold"}}>{item.title}</div>
                    <div style={{color:"orange",cursor:"pointer"}}>See all <FaArrowRight/></div>
                </div>
                <div style={{width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"start",gap:"20px",overflowX:"scroll",scrollSnapType:"x mandatory"}}>
                    {
                        item.content.map((item,index)=>{
                            return (
                                <div key={index} style={{width:"100%",height:"100%",flex:"0 0 30%",boxShadow:"0px 0px 10px rgb(240,240,240)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",borderRadius:"10px",fontSize:"10px",scrollSnapAlign:"center"}}>  
                                    <div style={{width:"100%",height:"60%",position:"relative",background:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"center",marginTop:"6px"}}>
                                        <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            {/* <FaLeaf size={40} color={"rgb(200,200,200)"}/> */}
                                            <img src={"/vitamin.svg"} onError={(e)=>{
                                                e.target.style.opacity="0";
                                            }} alt="Promo" style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                                            
                                        </div>
                                        {item?.in_stock?
                                        <div style={{position:"absolute",right:"0%",top:"0%",backgroundImage:"linear-gradient(to right,rgba(18,22,28,0.9),rgba(30,30,30,0.9))",color:"white",width:"50%",textAlign:"center",borderRadius:"10px"}}>In Stock</div>:
                                        <div style={{position:"absolute",right:"0%",top:"0%",backgroundImage:"linear-gradient(to right,rgba(200,22,28,0.9),rgba(30,30,30,0.9))",color:"white",width:"50%",textAlign:"center",borderRadius:"10px"}}>Out of Stock</div>}
                                    </div>
                                    <div style={{width:"100%",height:"40",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                        
                                        <div style={{width:"90%",height:"70%",fontFamily:"arial,sans-serif",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between"}}>
                                            <div style={{fontWeight:"bold",fontSize:"14px"}}>{item?.name}</div>
                                            <div>{item?.type}</div>
                                            <div>{item?.company}</div>
                                            <div style={{fontWeight:"bold",fontSize:"14px",width:"90%",textAlign:"center",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-between"}}>
                                                <div style={{textDecoration:"line-through"}}>{item.old_price? "#":null}{item?.old_price}</div>
                                                <div>#{item?.new_price}</div>
                                            </div>
                                        </div>
                                        <div style={{width:"100%",height:"30%",textDecoration:"none",paddingTop:"10px",paddingBottom:"10px",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"orange",cursor:"pointer",borderRadius:"6px",position:"relative"}} onClick={()=>{
                                            set_num(n=>n+=1);
                                        }}>
                                            <div>ADD TO CART</div>
                                            <FaPlus size={12}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>);
            })
}
{/* </div> */}
            
            {/* <div style={{width:"100%",backgroundPosition:"center",backgroundSize:"cover",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"6px"}}>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",border:"1px solid orange",color:"orange",cursor:"pointer",backgroundColor:day==true?"white":"rgb(18,22,28)",color:day==true?"rgb(18,22,28)":"white"}}>Make Order <FaCartPlus/></div>
                <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",border:"1px solid orange",color:"white",cursor:"pointer"}}><div>View Products</div> <FaCaretRight/></div>
            </div> */}

            <hr style={{width:"80%"}}/>



             
            

            {/* <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div>OPEN HOURS</div>
                <div>10 HOURS DAILY SERVICE</div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Monday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Tuesday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Wednesday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Thursday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Friday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Saturday</div>
                    <div>8AM to 6PM</div>
                </div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div>Sunday</div>
                    <div>8AM to 6PM</div>
                </div>
            </div> */}
            {/* <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",boxShadow:"0px 0px 10px rgb(200,200,200)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div>CERTIFIED & TRUSTED</div>
                <div><FaCertificate/> NDLEA</div>
                <div><FaCertificate/> NAFDAC</div>
            </div> */}


        </div>
    );
}

export default P_landing_1;