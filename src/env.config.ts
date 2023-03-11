export const EnvConfiguration = () => ({
    jwtSecret: process.env.SECRET,
    usernameSecret: process.env.USERNAME,
    passwordSecret: process.env.PASSWORD
})