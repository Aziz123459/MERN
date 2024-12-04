import createUser from "../models/user.module.js"
import createCompany from "../models/user.module.js"


const userController = {
    newuser:(req,res)=>{
        res.json(createUser())
    },
    newcompany:(req,res)=>{
        res.json(createCompany())
    },
    newUserCompany:(req,res)=>{
        res.json([createCompany(),createUser()])
    }
    
}

export default userController



 