
const HomeButtons = ({inField,color}) =>{

    return(
        <>
            <button className={`btn btn-${color} m-2 `} >{inField}</button>
        </>
    )
}


export default HomeButtons