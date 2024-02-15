import prisma from "../../utils/prisma.js";
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword: password,
            },
        });
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export default signup;
//# sourceMappingURL=signup.js.map