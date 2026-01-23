import { Mic } from "lucide-react"
import Meet from "../components/MeetingNavbut"   

const MeetingPage  = () =>{

    return(
        <>
        <div className="navbar bg-base-300">
            <div className="navbar-center">
                <Meet inField = {<Camera />} color = "neutral-content"/>
                <Meet inField = {<Mic />} color = "neutral-content"/>
                <Meet inField = {<Camera />} color = "neutral-content"/>
            </div>
        </div>
        </>
    )
}


export default MeetingPage