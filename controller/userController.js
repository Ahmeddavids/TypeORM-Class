const AppDataSource = require('../config/dbConfig')
const User = require('../entity/User');
const userRepository = AppDataSource.getRepository(User)



// Controller function to create a new user
exports.createUser = async (req, res) => {
    try {
        const { email, name } = req.body;
        const newUser = userRepository.create({
            email,
            name
        });
        const result = await userRepository.save(newUser);
        res.status(201).json({
            message: 'User created successfully', 
            data: result
        });
    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

// Controller function to get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await userRepository.find();
        res.json({ message: `The total users in our database is ${users.length}`, users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

// Controller function to get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await userRepository.findOneBy({ id: req.params.id });

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

// Controller function to update a user
exports.updateUser = async (req, res) => {
    try {
        const user = await userRepository.findOneBy({ id: req.params.id });

        if (user) {
            userRepository.merge(user, req.body);
            const result = await userRepository.save(user);
            res.json({ message: 'User updated successfully', result });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

// Controller function to delete a user
exports.deleteUser = async (req, res) => {
    try {
        const result = await userRepository.delete(req.params.id);
        if (result.affected) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};
