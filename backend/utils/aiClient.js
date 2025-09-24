import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function generateWithAI(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const result = await model.generateContent([prompt]);

  let text = result.response.text();
  text = text.replace(/```json|```/g, '').trim();

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error('Failed to parse AI JSON:', e);
    return { error: 'AI response was not valid JSON' };
  }
}
