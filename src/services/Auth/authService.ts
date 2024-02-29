import { SignUpForm } from "@/types/signUpForm";
import backendApi from "../backendApi";
import { SignInForm } from "@/types/signInForm";
import { validateJWTToken } from "../JWT/JWTFunctions";
import { userStore } from "@/stores/userStore";
import { toast } from "@/components/ui/use-toast";

const setUserData = userStore.getState().setUserData

export async function createNewUser(body: SignUpForm) {

    const response = await backendApi.post("/auth/register", { ...body, user_access_id: 2 })
    return response
}

export async function login(body: SignInForm) {

    try {
        const response = await backendApi.post<string>("/auth/login", body)
        const token = response.data
        const { access, id, name } = await validateJWTToken(token)
        setUserData({ access, id, name, token })
        return true

    } catch (error: any) {
        console.log(error)
        const message = error.response.data.message
        toast({
            title: "Ops! Algo deu errado!",
            description: Array.isArray(message) ? message[0] : message,
            variant: "destructive"
        })
        return false
    }
}

export async function logout() {
    setUserData({access:0, id:0, name:"", token:""})
    window.location.replace("/")
}

export async function ifTokenInvalidDisconnect(token:string){

    if (token) {
        try {
            await validateJWTToken(token)
        } catch (error) {
            console.log(error)
            setTimeout(logout, 500)
            
        }
    }
}