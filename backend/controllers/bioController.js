import { generateWithAI } from '../utils/aiClient.js';

export const generateBio = async (req, res) => {
  try {
    const formData = req.body;

    const prompt = `
    Write a professional biography based on this information:
    Core Values: ${formData.coreValues}
    Motivation: ${formData.motivation}
    Career Path: ${formData.careerPath}
    Milestones: ${formData.milestones}
    Strengths: ${formData.strengths}
    Work Style: ${formData.workStyle}
    Impact: ${formData.impact}
    Achievement: ${formData.achievement}
    Vision: ${formData.vision}
    Industry Impact: ${formData.industryImpact}
    Tone: ${formData.tone}
    Unique Traits: ${formData.unique}
    Personal Touch: ${formData.personalTouch}
    Fun Fact: ${formData.funFact}
    Closing Line: ${formData.closing}

    Return the result in JSON format:
    {
      "bioSummary": "a polished bio",
      "coreValues": "...",
      "motivation": "...",
      "careerPath": "...",
      "milestones": "...",
      "strengths": "...",
      "workStyle": "...",
      "impact": "...",
      "achievement": "...",
      "vision": "...",
      "industryImpact": "...",
      "tone": "...",
      "unique": "...",
      "personalTouch": "...",
      "funFact": "...",
      "closing": "..."
    }`;

    const aiResponse = await generateWithAI(prompt);
    res.json(aiResponse);
  } catch (error) {
    console.error('Error generating bio:', error);
    res.status(500).json({ error: 'Failed to generate biography' });
  }
};
