const zod = require("zod");
const AdminZodSchema = zod.object({
    username:zod.string().email(),
    password:zod.number()
});

module.exports =  AdminZodSchema

