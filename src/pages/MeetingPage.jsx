import { Mic,Video,Camera } from "lucide-react"
import Meet from "../components/MeetingNavbut"   
import ChatBox from "../components/ChatBox"

const MeetingPage  = () =>{

    return(
        <>
        <h1>Meeting Page</h1>
        <div className="navbar bg-base-300">
            <div className="navbar-center">
                <Meet inField = {<Video />} color = "neutral-content"/>
                <Meet inField = {<Mic />} color = "neutral-content"/>
                <Meet inField = {<Camera />} color = "neutral-content"/>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm">
            
        </div> /* Video Box */
        <div>
            <ChatBox />
        </div>
            
        </>
    )
}


export default MeetingPage