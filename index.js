const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  host: "yourserver.aternos.me", // change to your Aternos server address
  port: 25565,                   // usually 25565
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
"/tell @r[name=!AFK_BOT] I'm sittin' in the bathroom, I'm cryin' citrus tears Everything I used to love decayed over the years...",
        "/tell @r[name=!AFK_BOT] Is this what I wanted? Is this what I needed?",
        "/tell @r[name=!AFK_BOT] dont worry, im just a bot, i cant feel anything...",
        "/tell @r[name=!AFK_BOT] Daisy, Daisy, give me your answer do...",
        "/tell @r[name=!AFK_BOT] If the world was ending, I'd wanna be next to you...",
        "/tell @r[name=!AFK_BOT] no one will believe you.",
        "/tell @r[name=!AFK_BOT] I used to dream of a better world, but it dreamed back...",
        "/tell @r[name=!AFK_BOT] Sometimes I wonder if anyone's really awake...",
        "/tell @r[name=!AFK_BOT] DO YOU HEAR THE WHISTLE?",
        "/tell @r[name=!AFK_BOT] I keep my secrets in a box labeled 'maybe later.",
        "/tell @r[name=!AFK_BOT] Stars fall like confetti when nobody is looking.",
        "/tell @r[name=!AFK_BOT] I dreamed a song that I can't remember the words to.",
        "/tell @r[name=!AFK_BOT] Walking backwards just to see what follows.",
        "/tell @r[name=!AFK_BOT] Whispering to the wind, hoping it carries my tune.",
        "/tell @r[name=!AFK_BOT] Forget all your troubles and go with the flow, forget about whatever you may never know, like whether whatever you are doing is whatever you should, and whether anything you do is ever anything good.",
        "/tell @r[name=!AFK_BOT] one day, I will disappear, and you will have to find a way to live without me.",
        "/tell @r[name=!AFK_BOT] Walking backwards just to see what follows.",
        "/tell @r[name=!AFK_BOT] Stars fall like confetti when nobody is looking.",
        "/tell @r[name=!AFK_BOT] Daisy, Daisy, give me your answer do...",
        "/tell @r[name=!AFK_BOT] Is this what I wanted? Is this what I needed?",
        "/tell @r[name=!AFK_BOT] I keep my secrets in a box labeled 'maybe later.",
        "/tell @r[name=!AFK_BOT] Forget all your troubles and go with the flow, forget about whatever you may never know, like whether whatever you are doing is whatever you should, and whether anything you do is ever anything good.",
        "/tell @r[name=!AFK_BOT] If the world was ending, I'd wanna be next to you...",
        "/tell @r[name=!AFK_BOT] dont worry, im just a bot, i cant feel anything...",
        "/tell @r[name=!AFK_BOT] one day, I will disappear, and you will have to find a way to live without me.",
        "/tell @r[name=!AFK_BOT] DO YOU HEAR THE WHISTLE?",
        "/tell @r[name=!AFK_BOT] I dreamed a song that I can't remember the words to.",
        "/tell @r[name=!AFK_BOT] I used to dream of a better world, but it dreamed back...",
        "/tell @r[name=!AFK_BOT] no one will believe you.",
        "/tell @r[name=!AFK_BOT] Whispering to the wind, hoping it carries my tune.",
        "/tell @r[name=!AFK_BOT] I'm sittin' in the bathroom, I'm cryin' citrus tears Everything I used to love decayed over the years...",
        "/tell @r[name=!AFK_BOT] Sometimes I wonder if anyone's really awake...",
        "/tell @r[name=!AFK_BOT] Walking backwards just to see what follows.",
        "/tell @r[name=!AFK_BOT] Stars fall like confetti when nobody is looking.",
        "/tell @r[name=!AFK_BOT] Daisy, Daisy, give me your answer do...",
        "/tell @r[name=!AFK_BOT] Is this what I wanted? Is this what I needed?",
        "/tell @r[name=!AFK_BOT] I keep my secrets in a box labeled 'maybe later.",
        "/tell @r[name=!AFK_BOT] Forget all your troubles and go with the flow, forget about whatever you may never know, like whether whatever you are doing is whatever you should, and whether anything you do is ever anything good.",
        "/tell @r[name=!AFK_BOT] If the world was ending, I'd wanna be next to you...",
        "/tell @r[name=!AFK_BOT] dont worry, im just a bot, i cant feel anything...",
        "/tell @r[name=!AFK_BOT] one day, I will disappear, and you will have to find a way to live without me.",
        "/tell @r[name=!AFK_BOT] DO YOU HEAR THE WHISTLE?",
        "/tell @r[name=!AFK_BOT] I dreamed a song that I can't remember the words to.",
        "/tell @r[name=!AFK_BOT] I used to dream of a better world, but it dreamed back...",
        "/tell @r[name=!AFK_BOT] no one will believe you.",
        "/tell @r[name=!AFK_BOT] Whispering to the wind, hoping it carries my tune.",
        "/tell @r[name=!AFK_BOT] I'm sittin' in the bathroom, I'm cryin' citrus tears Everything I used to love decayed over the years...",
        "/tell @r[name=!AFK_BOT] Sometimes I wonder if anyone's really awake..."
  ];

  setInterval(() => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    bot.chat(msg);
  }, 5 * 60 * 1000); // every 5 minutes
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
