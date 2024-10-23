import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not defined in the environment variables.');
}

const genAI = new GoogleGenerativeAI(apiKey);

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  safetySettings: safetySettings,
});

const lastResort = async (selectedMedicine: string, targetLanguage: string): Promise<string> => {
  const prompt = `Translate "${selectedMedicine}" to "${targetLanguage}". Do not use brand names. Only respond with the translated term.`;
  const result = await model.generateContent(prompt);

  if (!result) {
    return 'No valid content found in the response from Gemini AI.';
  }
  console.log(result.response.text());
  return result.response.text();
};

export default lastResort;