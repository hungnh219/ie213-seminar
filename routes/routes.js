const express = require('express')
const router = express.Router()
const Model = require('../model/model')

// data
const users = [
    { firstname: "Nguyen", lastname: "Hung", email: "hungnh219@gmail.com", phone: "0909090909", birthday: "2003-09-21"},
    { firstname: "To", lastname: "An", email: "thanhan2k@gmail.com", phone: "0908070605", birthday: "2000-01-13"},
];

const createDefaultUsers = async () => {
    try {
        for (let user of users) {
            const newUser = new Model(user);
            await newUser.save();

            console.log(`User ${user.firstname} has been added to the database`);
        }
        console.log('Users added successfully!');
    } catch(error) {
        console.log(error)
    }
}

router.get('/getAll', async (req, res) => {
    try {
        const users = await Model.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// post
router.post('/addNewUser', async (req, res) => {
    const { firstname, lastname, email, phone, birthday } = req.body;

    try{
        const newUser = new Model ({ firstname, lastname, email, phone, birthday })
        const savedUser = await newUser.save();
        res.status(200).json(savedUser)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }
})

// update by age
router.patch('/updateByEmail/:email', async (req, res) => {
    const oldEmail = req.params.email;
    const { firstname, lastname, email, phone, birthday } = req.body;

    try {
        const updatedUser = await Model.findOneAndUpdate(
            { email: oldEmail },
            { firstname: firstname, lastname: lastname, email: email, phone: phone, birthday: birthday },
            { new: true }
        );

        res.status(200).json(updatedUser);
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})

// delete
router.delete('/deleteByEmail/:email', async (req, res) => {
    const email = req.params.email;

    try {
        const userToDelete = await Model.findOneAndDelete({ email })

        if (!userToDelete) {
            return res.status(404).json({ message: `khong co user co email: ${email}`})
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch(error) {
        res.status(400).json({ message: error.message})
    }
})

console.log('api setup success')

module.exports = {
    createDefaultUsers,
    router
};
