
const HomeButtons = ({inField,color}) =>{

    return(
        <>
            <button className={`btn btn-${color}`} >{inField}</button>
        </>
    )
}


export default HomeButtons