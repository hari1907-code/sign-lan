

const IdField = ({ placeholder, logo }) => {

    return (
        <>
            <div className="flex gap-2">
                <input type="text" placeholder={placeholder} className="input" />
                <button className="btn btn-secondary">{logo}</button>
            </div>
        </>
    )
}


export default IdField