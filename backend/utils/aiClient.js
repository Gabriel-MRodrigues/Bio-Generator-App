import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function generateWithAI(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const result = await model.generateContent([prompt]);
  const text = result.response.text();

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('Failed to parse AI JSON:', e);
    return { error: 'AI response was not valid JSON' };
  }
}
