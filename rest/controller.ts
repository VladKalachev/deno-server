import { User } from "./interfaces.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let users: User[] = [
    { id: '1', name: 'a' },
    { id: '2', name: 'b' }
]

// get all
export const getUsers = ({ response }: { response: any }) => {
    response.status = 200;
    response.body = {
        users
    }
}

// get by id
export const getUser = ({response, params }:  { response: any, params: {id: string} }) => {
    
    const user: User | undefined = users.find(user => user.id === params.id);
     if(user){
         response.status = 200;
         response.body = {
                 user 
         }
     } else {
         response.status = 404;
         response.body = {
             message: "User Not Found" 
         }
     }
    
 }

// create user
export const createUser = async ({response, request }:  { response: any, request: any }) => {
    const body = await request.body();

    if(!request.hasBody) {
        response.status = 404;
        response.body = {
            message: "Invalid data" 
        }
    } else {
        const user: User =  body.value;
        user.id = v4.generate();
        users.push(user);
        response.status = 201;
        response.body = {
            user
        }
    }
}

// update user
export const updateUser = async ({params, response, request}: {params: any, response: any, request: any}) => {
    const user: User | undefined = users.find(user => user.id === params.id);
    if(user) {
        const body = await request.body();
        users = users.map(u => u.id == user.id ? {...u, ...body.value} : u);
        response.status = 200;
        response.body = {
            users
        }
    } else {
        response.status = 404;
        response.body = {
            message: "User Not Found" 
        }
    }

}

// delete user
export const deleteUser = async ({params, response, request}: {params: any, response: any, request: any}) => {
    const user: User | undefined = users.find(user => user.id === params.id);
    if(user) {
        // const body = await request.body();
        users = users.filter(u => u.id !== user.id);
        response.status = 200;
        response.body = {
            users
        }
    } else {
        response.status = 404;
        response.body = {
            message: "User Not Found" 
        }
    }
}