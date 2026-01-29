const MeetingNavbut = ({ inField, color, onClick }) => {

    return (
        <>
            <button onClick={onClick} className={`h-10 w-20 rounded-full btn btn-${color} m-2 `} >{inField}</button>

        </>
    )
}


export default MeetingNavbut