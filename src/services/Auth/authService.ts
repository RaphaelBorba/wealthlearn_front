import { SignUpForm } from "@/types/signUpForm";
import api from "../api";
import { SignInForm } from "@/types/signInForm";


export async function createNewUser(body: SignUpForm) {

        const response = await api.post("/auth/register", {...body, user_access_id:2})
        return response
    

}

export async function login(body:SignInForm){

    const response = await api.post("/auth/login", body)
    return response
}