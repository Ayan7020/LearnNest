import { atom } from 'recoil';
import {SignupFormValid} from "@repo/types/SignupValid"

export const SignupData = atom<SignupFormValid>({
    key: 'signupDataState',
    default: {
        FirstName: '',
        LastName: '',
        email: '',
        password: '',
        otp: '',
        Authtype: 'CREDENTIALS',
        AccountType: 'Student',
        Authenticated: false
    },
});
 


