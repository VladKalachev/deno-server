import { Router } from "https://deno.land/x/oak/mod.ts";
import {
    getUsers, 
    getUser, 
    createUser, 
    updateUser,
    deleteUser
} from './controller.ts';

const router = new Router();

router.get('/', ({ response }: { response: any }) => {
    response.body = "Hello OAK";
})

router
    .get('/api/users', getUsers)
    .get('/api/users/:id', getUser)
    .post('/api/users/', createUser)
    .put('/api/users/:id', updateUser)
    .delete('/api/users/:id', deleteUser);

export {router}