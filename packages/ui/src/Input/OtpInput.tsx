import { forwardRef } from "react"


const OtpInput = forwardRef<HTMLInputElement>((
    {},
    ref
) => {
    return <div> 
        <input 
        type="text" 
        ref={ref}
        className="w-fit text-[13px] "
        />
    </div>
})

export default OtpInput