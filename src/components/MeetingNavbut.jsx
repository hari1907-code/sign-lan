
const MeetingNavbut  = ({inField,color,onClick}) =>{

    return(
        <>
            <button onClick={onClick} className={`h-[40px] w-[40px]rounded-full btn btn-${color} m-2 `} >{inField}</button>
        </>
    )
}


export default MeetingNavbut