import { Mic,Video,Camera } from "lucide-react"
import Meet from "../components/MeetingNavbut"   
import ChatBox from "../components/ChatBox"

const MeetingPage  = () =>{

    return(
        <>
        <div className="navbar h-[75px] max-w-full flex items-center justify-center  ">
            <div className="navbar-center">
                <Meet inField = {<Video />} color = "neutral-content"/>
                <Meet inField = {<Mic />} color = "neutral-content"/>
                <Meet inField = {<Camera />} color = "neutral-content"/>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm flex items-center justify-center ">
            <figure>
                <div className="">
                    
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div> /* Video Box */
        <div>
            <ChatBox />
        </div>
            
        </>
    )
}


export default MeetingPage