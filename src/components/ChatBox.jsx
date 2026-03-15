const TitleBox  = ({ message }) =>{

    return(
        <>
            <div className="h-24 flex flex-col m-1 bg-base-900  p-4">
                <h1 className="font-bold">Hari</h1>
                <p >{message}</p>
            </div>
            
        </>
    )
}


export default TitleBox