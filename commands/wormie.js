const responses = [
  "Its all gouda.",
  "Without a doubt.",
  "Have you helped someone else today?",
  "Yes, definitely.",
  "It is decidedly so.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Signs point to yes.",
  "Absolutely!",
  "Don't count on it.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
  "Not likely.",
  "Better not tell you now.",
  "Chances are low.",
  "Unlikely.",
  "No way LMAO.",
  "I highly doubt it.",
];

module.exports = {
  name: "mouse",
  description: "Would you like to see a picture of a mouse and a worm?",
  alias: ["wormie"],
  usage: "/wormie <question>",
  example: "/wormie Is this bot awesome?",
  category: "Fun",
  handler: async (ctx) => {
    const { message } = ctx;
    const { text } = message;

    if (!text.substring(text.indexOf(" ") + 1)) {
      await ctx.reply("You need to ask a question!");
      return;
    }

    const response = responses[Math.floor(Math.random() * responses.length)];
    await ctx.reply(response);
  },
};
