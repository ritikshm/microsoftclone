import create from "zustand";
import {persist} from 'zustand/middleware'
const authStore=(set)=>({
    userProfile:null,
    addUser:user=>set({userProfile:user}),
    removeUser:()=>set({userProfile:null})
})
const useAuthStore=create(
    persist(authStore,{
        name:'auth'
    })
)
export default useAuthStore


