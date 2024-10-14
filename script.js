const open = document.getElementById("open");
const close = document.getElementById("close");
const bot = document.getElementById("agent-container");

open.addEventListener("click", () => {
  bot.classList.remove("closed");
  open.classList.add("closed");
});

close.addEventListener("click", () => {
  bot.classList.add("closed");
  open.classList.remove("closed");
});
