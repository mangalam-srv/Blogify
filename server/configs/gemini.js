import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function main(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt + " Generate a blog content in simple readable format.",
      },
    ],
    model: "llama-3.1-8b-instant", // ✅ updated model
  });

  return chatCompletion.choices[0]?.message?.content || "";
}

export default main;