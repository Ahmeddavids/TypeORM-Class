const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();
// Create User Endpoint
router.post('/create', createUser);
// Get all Users Endpoint
router.get('/all', getUsers);
// Get a User by ID Endpoint
router.get('/one/:id', getUserById);
// Update a User by ID Endpoint
router.patch('/update/:id', updateUser);
// Delete a User Endpoint
router.delete('/delete/:id', deleteUser);


module.exports = router;