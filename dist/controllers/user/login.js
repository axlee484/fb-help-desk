import prisma from "../../utils/prisma.js";
import createJwt from "../../middleware/createJwt.js";
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUniqueOrThrow({
            where: { email },
        });
        if (!user)
            throw new Error(`User not found`);
        if (user.hashedPassword != password)
            throw new Error(`Wrong password`);
        const token = createJwt(email, user.id);
        res.status(200).json({ token, page: user.page });
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
export default login;
//# sourceMappingURL=login.js.map