import { atom } from "recoil";

export const SignupLoading = atom<boolean>({
    key: "SignupLoading",
    default: false,
})