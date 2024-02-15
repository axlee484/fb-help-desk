import prisma from "../../utils/prisma.js";
const postMessage = async (req, res) => {
    try {
        const { user } = req;
        if (!user)
            throw new Error("Unauthorized");
        const { conversationId, content, sentBy } = req.body;
        await prisma.message.create({
            data: {
                content,
                sentBy,
                conversation: {
                    connect: {
                        id: conversationId,
                    },
                },
            },
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export default postMessage;
//# sourceMappingURL=postMessage.js.map