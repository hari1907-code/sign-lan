
export const goto = (path) => window.location.href = path

export const generateID = () => {
    const min = 100000
    const max = 999999
    const newOtp = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(`Generated OTP: ${newOtp}`)
    return newOtp
}