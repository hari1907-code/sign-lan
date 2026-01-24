import { Mic,Video,Camera } from "lucide-react"
import Meet from "../components/MeetingNavbut"   
import ChatBox from "../components/ChatBox"
import Camerae from "../components/Camera"
import { useState } from "react"
const MeetingPage  = () =>{

   const [toggleCamFn, setToggleCamFn] = useState(null);

    return(
        <>
        <div className="navbar h-[75px] max-w-full flex items-center justify-center  ">
            <div className="navbar-center">
                <Meet inField = {<Video />} color = "accent-content" onClick={() => toggleCamFn && toggleCamFn()}/>
                <Meet inField = {<Mic />} color = "accent-content"/>
                <Meet inField = {<Camera />} color = "accent-content"/>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm flex items-center h-[500px] max-w-full">
            
                <div className="h-[490px]">
                    <Camerae onToggle={setToggleCamFn}/>
                </div>
            
            <div className="card-body">
               
            </div>
        </div> /* Video Box */
        <div>
            <ChatBox />
        </div>
            
        </>
    )
}


export default MeetingPage