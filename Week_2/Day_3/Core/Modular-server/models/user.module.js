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


export default {createUser,createCompany};