import { request, response } from 'express';
import User from '../model/user-schema.js';

export const getUsers = async(request, response) =>{
        try {
                let user = await User.find();
                response.json(user);
        } catch (error) {
                response.json({ message : error.message });
        }
    
} 

export const dashboard = async (request, response) => {
        
   const user = request.body;
   const newUser = new User(user);

   try {
           await newUser.save();
           response.json(newUser);
   } catch (error) {
           response.json({ message : error.message });
   }
}

// export const getUserById = async (request, response) => {
//         const id = request.params.id;
//         try{
//         const user = await User.findById(id);
//         response.json(user);
//         }catch{
//                 response.error({message: error.message})
//         }
// }