const generateOtp = (length: number) => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += characters[Math.floor(Math.random() * characters.length)];
    }
    return otp;
};

export default generateOtp;
