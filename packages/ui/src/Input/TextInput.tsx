
interface TextInputProps {
    placeholder: string,
    label: string,
    inputType: string
}
const TextInput = ({placeholder,label,inputType}: TextInputProps) => {
    return <div className="flex flex-col  w-full   items-start"> 
        <label className="w-full">{label}</label>
        <input 
        style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        className="w-full p-[12px] text-richblack-5 rounded-[0.5rem] bg-richblack-800" 
        placeholder={placeholder} required/>
    </div>
}

export default TextInput