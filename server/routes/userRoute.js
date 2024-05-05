const express = require("express");
const router = express.Router();
const User = require("../models/userModel");



router.post("/register", async (req, res) => {

    const { name, email, password } = req.body
    


    try {

        const userExit = await User.findOne({ email })

        if (userExit) {

            return res.status(400).json({ message: error });

        } else {

            const newUser = new User({ name, email, password })
            newUser.save()
            res.send('User Registered Successfully')
        }

    } catch (error) {

        return res.status(400).json({ message: error });
    }
});


router.post("/addcustomer", async (req, res) => {

    const { name, email, password } = req.body

    try {

        const userExit = await User.findOne({ email })

        if (userExit) {

            return res.status(400).json({ message: error });

        } else {

            const newUser = new User({ name, email, password })
            newUser.save()
            res.send('Customer added Successfully')
        }

    } catch (error) {

        return res.status(400).json({ message: error });
    }

});

router.post("/login", async (req, res) => {

    const { email, password } = req.body

    try {

        const user = await User.find({ email, password })

        if (user.length > 0) {

            const currentUser = {
                name: user[0].name,
                email: user[0].email,
                _id: user[0]._id,

            }
            res.send(currentUser);

        }
        else {
            return res.status(400).json({ message: 'User Login Failed' });
        }

    } catch (error) {

        return res.status(400).json({ message: 'Something went wrong' });
    }
})


router.get("/getcurrentuser/:id", async (req, res) => {

    let userId = req.params.id;
    try {

        const currentusers = await User.findById(userId)
        res.send(currentusers)

    } catch (error) {
        return res.status(400).json({ message: error });
    }

})

router.get("/getallusers", async (req, res) => {
    try {

        const users = await User.find()
        res.send(users)

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.put("/update/password/:id", async (req, res) => {

    let userId = req.params.id;
    const { password } = req.body;

    const updateUserPassword = {

        password,

    }

    try {

        await User.findByIdAndUpdate(userId, updateUserPassword)
        res.send('User Password Updated Successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


router.put("/update/name/:id", async (req, res) => {

    let userId = req.params.id;
    const { name } = req.body;

    const updateUserName = {

        name,

    }

    try {

        await User.findByIdAndUpdate(userId, updateUserName)
        res.send('User Name Updated Successfully')

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});


//customer management delete function
router.delete("/delete/customer/:id", async (req, res) => {

    let userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId)

        res.send('Customer Deleted Successfully')
    }

    catch (error) {


        return res.status(400).json({ message: error });
    }
});


module.exports = router;