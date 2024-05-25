import React, { forwardRef } from "react";
import { TextInputProps } from "@repo/types/InputProps";

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { placeholder, label, inputType, typePassword, ErrorMessage, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col  w-full gap-2 items-start">
        <label className="w-full mb-1 text-[12px] sm:text-[18px] ">
          {label}
        </label>
        <input
          type={typePassword ? "password" : "text"}
          ref={ref}
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
          }}
          className={`w-full p-[12px] dark:text-richblack-5  rounded-[0.5rem] text-black   border-2 dark:bg-richblack-800 font-medium ${ ErrorMessage? "border-[#ff4d4d] ": "border-black"}`}
          placeholder={placeholder}
          {...props}
        />
        <div className="text-sm text-[#ff4d4d] font-semibold ">{ErrorMessage}</div>
      </div>
    );
  }
);

export default TextInput;
