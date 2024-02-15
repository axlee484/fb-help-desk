import prisma from "../../utils/prisma.js";
const getConversationById = async (req, res) => {
    try {
        const { user } = req;
        if (!user)
            throw new Error("Unauthorized");
        const { id: _id } = req.params;
        const id = parseInt(_id);
        const conversation = await prisma.conversation.findUnique({
            where: {
                id,
                userId: user.id,
            },
            select: {
                messages: true,
            },
        });
        res.status(200).json(conversation);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
export default getConversationById;
//# sourceMappingURL=getConverationById.js.map