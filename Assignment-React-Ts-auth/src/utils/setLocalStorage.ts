import { UserType } from "../types/UserType";

export const setUserLse = (user) =>{
    localStorage.setItem('user' , JSON.stringify(user));
}

export const isAuth = (user : UserType) =>{
    if(!localStorage.getItem('user'))
        return;
    return JSON.parse(localStorage.getItem('user'));
}