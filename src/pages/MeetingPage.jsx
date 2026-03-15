import { ClosedCaptionIcon, MicIcon, PhoneIcon, VideoIcon } from "lucide-react"
import { useRef, useState,useEffect} from "react"
import Camerae from "../components/Camera"
import ChatBox from "../components/ChatBox"
import Meet from "../components/MeetingNavbut"
import { Navigate, useParams } from "react-router"
import { goto } from "../assets/utils"
//import {changeSubtitle} from "../components/ChatBox"
const MeetingPage = () => {
    const [isOpenCaption, setIsOpenCaption] = useState(false)
    const cameraRef = useRef([])
    let { id } = useParams()

    let participantCount = parseInt(localStorage.getItem(id))
    const [message, setMessage] = useState("Participant")

    const content = {
        1: "Hello",
        2: "home",
        3: "welcome",
        4: "victory",
        5: "Subtitle content for Button 5"
    }

    const changeSubtitle = (num) => {
        setMessage("Processing...") // show loading text first

        setTimeout(() => {
            setMessage(content[num])
        }, Math.floor(Math.random() * (6000 - 3000 + 1)) + 3000)
    }
     useEffect(() => {
        //when you click on the button 1,2,3,4 the subtitle will change 
    const handleKeyDown = (event) => {

      switch (event.key.toLowerCase()) {

        case "1":
          changeSubtitle(1)
          break;

        case "2":
          changeSubtitle(2)
          break;

        case "3":
          changeSubtitle(3)
          break;

        case "4":
          changeSubtitle(4)
          break;

        default:
          break;
      }

    };
     window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

    return (
        <>
            <div className="bg-base-200 p-4 h-screen flex flex-col overflow-hidden">

                <div className="navbar max-w-full max-h-[20vh] flex items-center justify-center bg-base-100 shadow-xl mb-5 rounded-2xl   ">
                    <div className="navbar-center">
                        <Meet inField={<VideoIcon />} color="primary" onClick={() => cameraRef.current.toggleCamera()} />
                        <Meet inField={<MicIcon />} color="accent-content" />
                        <Meet inField={<ClosedCaptionIcon />} color="accent-content" onClick={() => setIsOpenCaption(isOpenCaption => !isOpenCaption)} />
                        <Meet inField={<PhoneIcon />} color="accent-content" onClick={() => goto('/')} />
                    </div>
                </div>

                <div className={"gap-2 flex flex-wrap items-center justify-center p-2  shadow-lg rounded-2xl bg-base-100 " + (isOpenCaption ? "h-[60vh]" : "h-[80vh]")}>
                    {[...Array(participantCount)].map((_, i) => (
                        <Camerae ref={(ref) => cameraRef.current[i] = ref} height={(isOpenCaption ? "h-[55vh]" : "h-[72vh]")} />
                    ))}
                </div>

                {/* Caption open when openCaption Icon is clicked */}
                {isOpenCaption && <div className="h-auto flex flex-row items-center gap-2 p-2 shadow-lg rounded-2xl transition-all m-2">
                    <div className="h-auto flex flex-col-reverse justify-center p-4 basis-1/3 bg-base-300">
                        <ChatBox message={message} />
                    </div>

                
                   
                </div>}



            </div>
        </>
    )
}


export default MeetingPage