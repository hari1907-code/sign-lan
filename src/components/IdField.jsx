import { useState } from "react"

const IdField = ({id, placeholder, logo}) => {
    const [enteredId, setEnteredId] = useState('');
    const handleVerify = () => {
        if (id === enteredOtp) {
            alert(`✅ OTP verified successfully`);
        } else {
            alert(`OTP Wrong`);
        }
    }
    return (
        <>
            <div className="flex gap-2">
                <input value={enteredId} onChange={(e) => setEnteredId(e.target.value.replace(/\D/g, ""))} type="text" placeholder={placeholder} className="input" />
                <button onClick={handleVerify} className="btn btn-secondary">{logo}</button>
            </div>
        </>
    )
}


export default IdField