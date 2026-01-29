import { useState } from "react"

const IdField = ({ setOtp, onClick, placeholder, logo }) => {
    const [enteredId, setEnteredId] = useState('')

    return (
        <>
            <div className="flex gap-2">
                <input value={enteredId} onChange={(e) => {
                    setEnteredId(e.target.value)
                    setOtp(e.target.value)
                }} type="text" placeholder={placeholder} className="input" />
                <button onClick={onClick} className="btn btn-secondary">{logo}</button>
            </div>
        </>
    )
}


export default IdField