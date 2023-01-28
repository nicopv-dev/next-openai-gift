import { openai } from "@/config/openai";

export default async function handler(req, res) {
  if (req.method != "POST") {
    return res.status(500).json({ message: "Metodo no soportado" });
  }

  const { text } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.6,
      max_tokens: 2048,
    });
    const choices = completion.data.choices[0]?.text.trim().split(/\n+/);
    return res.status(200).json({ message: "Generated name", data: choices });
  } catch (err) {
    console.log(err);
    return res.status(502).json({ err });
  }
}

// function generatePrompt(priceMin, priceMax, gender, age, hobbies) {
//   return `sugiere 3 regalos de navidad para una persona de ${age} años, ${gender} que le interesa ${hobbies}.`;
// }
