import backendApi from "../backendApi";

export type UserResponseAPI = {
    id:number,
    name:string,
    email:string,
    user_access_id:number,
    created_at:Date,
    updated_at:Date,
}


export function getUserData(token:string, id:number){

    return backendApi.get<UserResponseAPI>(`/user/findUserForProfilePage/${id}`, {headers:{Authorization:`Bearer ${token}`}})
}