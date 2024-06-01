import React, { forwardRef } from "react";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    active: boolean;
    width_Button: "fit" | "full" | "screen";
}