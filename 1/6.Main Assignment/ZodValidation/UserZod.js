const zod = require("zod");
const UserZodSchema = zod.object({
    username:zod.string().email(),
    password:zod.number()
});

module.exports =  UserZodSchema

