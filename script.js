document.getElementById("sendBtn").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value;
  if (userInput) {
    addMessage(userInput, "user");
    sendToDialogflow(userInput);
    document.getElementById("userInput").value = "";
  }
});

function addMessage(text, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(
    "message",
    sender === "bot" ? "bot-message" : "user-message"
  );
  messageDiv.innerText = text;
  document.getElementById("messages").appendChild(messageDiv);
}

function sendToDialogflow(message) {
  fetch("https://api.dialogflow.com/v1/query?v=20150910", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_DIALOGFLOW_TOKEN", // Insert your Dialogflow Token
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: message,
      lang: "en",
      sessionId: "123456",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const botMessage = data.result.fulfillment.speech;
      addMessage(botMessage, "bot");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
