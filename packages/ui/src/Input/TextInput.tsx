
interface TextInputProps {
    placeholder: string,
    label: string,
    inputType: string,
    typePassword?: boolean
}
const TextInput = ({placeholder,label,inputType,typePassword}: TextInputProps) => {
    return <div className="flex flex-col  w-full gap-2 items-start"> 
        <label className="w-full mb-1 text-[12px] sm:text-[18px] ">{label}</label>
        <input 
        type={typePassword? "password":"text"}
        style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
        className="w-full p-[12px] dark:text-richblack-5 rounded-[0.5rem] text-black border-black  border-2 dark:bg-richblack-800 font-medium" 
        placeholder={placeholder} required/>
    </div>
}

export default TextInput