// agent.js
document.addEventListener("DOMContentLoaded", async function () {
  const chatDiv = document.getElementById("chat");
  const messageInput = document.getElementById("messageInput");
  const sendMessageButton = document.getElementById("sendMessage");
  const leftPane2Div = document.getElementById("leftPane2");

  async function appendConversations(conversations) {
    const _conversations = await Promise.all(
      conversations.map(async (conversation) => {
        const messages = await fetchMessages(conversation.id);
        return { id: conversation.id, messages };
      })
    );
    console.log(_conversations);
    const displayConvo = _conversations.map((convo) => {
      console.log(convo);
      convo.messages.messages.sort((m1, m2) => Date.parse(m1) - Date.parse(m2));
      return {
        ...convo,
        messages: undefined,
        topMessage: convo.messages.messages[0],
      };
    });
    console.log(displayConvo);
    return _conversations;
  }

  function appendMessages(conversation) {
    conversation.forEach((message) => {
      console.log(message);
      if (message.sentBy == "CUSTOMER") appendIncomingMessage(message.content);
      if (message.sentBy == "AGENT") appendSentMessage(message.content);
    });
  }

  // Function to append a sent message to the chat area
  function appendSentMessage(messageText) {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("sent-container");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "sent");
    messageDiv.innerHTML = `<div class="text">${messageText}</div>`;
    containerDiv.appendChild(messageDiv);
    chatDiv.appendChild(containerDiv);
  }

  // Function to append an incoming message to the chat area
  function appendIncomingMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "incoming");
    messageDiv.innerHTML = `<div class="text">${messageText}</div>`;
    chatDiv.appendChild(messageDiv);
  }

  sendMessageButton.addEventListener("click", function () {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      appendSentMessage(messageText);
      messageInput.value = "";
    }
  });

  // Function to fetch messages from the server
  async function fetchMessages(id) {
    const response = await fetch(`http://localhost:5000/conversation/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("token"),
      },
    });
    return await response.json();
  }
  async function fetchConversations() {
    const response = await fetch("http://localhost:5000/conversation", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + window.sessionStorage.getItem("token"),
      },
    });
    return await response.json();
  }
  const conversations = await fetchConversations();

  await appendConversations(conversations);
});
