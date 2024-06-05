// personalDetailsState.ts
"use client";

import { atom, selector } from "recoil";
import { PersonaldetailsValue } from "@repo/common/personalschemas";
import { getSession } from "next-auth/react";
import * as Hash from "@repo/types/Next-auth-types"
 
 
export const PersonalDetailsAtoms = atom<PersonaldetailsValue>({
    key: "PersonalDetailsAtoms",
    default: selector({
      key: "PersonalDetailsAtoms/Default",
      get: async () => {
        const session = await getSession();
        return {
          FirstName: session?.user?.FirstName || 'First Name',
          LastName: session?.user?.LastName || 'Last Name',
          DateofBirth: session?.user?.AdditionalDetails?.DateofBirth || undefined, 
          ContactNumber: session?.user?.AdditionalDetails?.contactNumber || undefined,
          About: session?.user?.AdditionalDetails?.about || undefined,
          Gender: session?.user.AdditionalDetails?.Gender || 'Male'
        };
      },
    }),
  });
  