import express from "express";
const app = express();
const port = 8000;
// we can create a function to return a random / fake "Product"
import {faker} from "@faker-js/faker";
const createUser = () => {
    const newFake = {
        id:faker.string.uuid(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number()
    };
    return newFake;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFake = {
        id:faker.string.uuid(),
        name:faker.company.name(),
        addres:{
            city:faker.location.city(),
            street:faker.location.street(),
            state:faker.location.state(),
            zip_code:faker.location.zipCode(),
            country:faker.location.country()
        }
    };
    return newFake;
};
    
const newFakeCompany = createCompany();
console.log(newFakeCompany);

app.get("/api/users/new",(req,res)=>{
    res.json(createUser())
})

app.get("/api/companies/new" ,(req,res)=>{
    res.json(createCompany())
})

app.get("/api/user/company" , (req,res)=>{
    res.json([createCompany(),createUser()])
})













app.listen( port, () => console.log(`Listening on port: ${port}`) );