const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "pheinsserver.falixsrv.me", // change to your Aternos server address
  port: 29510,                   // usually 25565
  username: "AFK_BOT"            // use an alt account name
  // password: "yourpassword"     // only if premium account
});

// When bot spawns
bot.on("spawn", () => {
  console.log("✅ Bot joined Aternos server!");
  chatLoop();
  movementLoop();
});

// --- Chat loop ---
function chatLoop() {
  const messages = [
    "test"
];

  setInterval(() => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    bot.chat(msg);
  },   5 * 60 * 1000); // every 5 minutes
}

// --- Movement loop ---
function movementLoop() {
  let left = true;

  setInterval(() => {
    if (left) {
      bot.setControlState("left", true);
      setTimeout(() => bot.setControlState("left", false), 2000);
    } else {
      bot.setControlState("right", true);
      setTimeout(() => bot.setControlState("right", false), 2000);
    }
    left = !left;

    // also jump sometimes
    if (Math.random() < 0.3) { // 30% chance
      bot.setControlState("jump", true);
      setTimeout(() => bot.setControlState("jump", false), 500);
    }
  }, 60 * 1000); // every 1 minute
}
