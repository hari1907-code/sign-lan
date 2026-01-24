
const HomeButtons = ({inField,color,onClick}) =>{

    return(
        <>
            <button onClick={onClick} className={`btn btn-${color} m-2 `} >{inField}</button>
        </>
    )
}


export default HomeButtons