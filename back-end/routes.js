import express from 'express';
//import { dashboard } from '../../frontend/src/Service/api.js';
import { getUsers, dashboard } from '../controller/user-controller.js';

const route = express.Router();

route.get('/', getUsers);
route.post('/add', dashboard);
//route.get('/:id', getUserById);

export default route;