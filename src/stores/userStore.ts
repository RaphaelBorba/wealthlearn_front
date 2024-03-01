import { create } from 'zustand'

type UserStore = {
    userData: userData,
    setUserData: (data:userData)=>void
}

export type userData = {
    token: string,
    name: string,
    id: number,
    access: number,
}

export const userStore = create<UserStore>((set) => ({
    userData: {
        access: 0,
        id: 0,
        name: "",
        token: ""
    },
    setUserData: (data:userData) => set({userData:data})

}))


