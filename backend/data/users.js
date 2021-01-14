import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'faizan',
        email: 'faizan@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'bilal',
        email: 'bilal@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'maaz',
        email: 'maaz@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
export default users