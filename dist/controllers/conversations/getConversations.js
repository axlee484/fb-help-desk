import prisma from "../../utils/prisma.js";
const getAllConversations = async (req, res) => {
    try {
        const { user } = req;
        if (!user)
            throw new Error("Unauthorized");
        const conversations = await prisma.conversation.findMany({
            where: {
                userId: user.id,
            },
        });
        res.status(200).json(conversations);
        console.log(conversations);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
export default getAllConversations;
//# sourceMappingURL=getConversations.js.map