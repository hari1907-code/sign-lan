import { Mic,Video,ClosedCaption } from "lucide-react"
import Meet from "../components/MeetingNavbut"
import ChatBox from "../components/ChatBox"
import Camerae from "../components/Camera"
import { useRef } from "react"
const MeetingPage  = () =>{

   const cameraRef = useRef(null);

    return(
        <>
        <div className="navbar h-20 max-w-full flex items-center justify-center  ">
            <div className="navbar-center">
                <Meet inField = {<Video />} color = "primary" onClick={() => cameraRef.current.toggleCamera()}/>
                <Meet inField = {<Mic />} color = "accent-content"/>
                <Meet inField = {<ClosedCaption />} color = "accent-content"/>
            </div>
        </div>
        <div className="card card-side bg-base-100 shadow-sm flex items-center h-[500px] max-w-full">

                <div className="h-[490px]">
                    <Camerae ref={cameraRef} />
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