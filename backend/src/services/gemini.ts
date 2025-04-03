// services/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

const VALID_EXPERTS = [
  'operating systems',
  'computer networking',
  'Oops',
  'data structures and algorithms',
  'database management systems',
  'artificial intelligence and machine learning'
];

const generateContent = async (messages: Array<{role: string, parts: string}>, subjectExpert: string) => {
  try {
    const expert = VALID_EXPERTS.includes(subjectExpert.toLowerCase()) 
      ? subjectExpert 
      : 'generalCS';

    // Pre-trained history for strict topic enforcement (direct from AI Studio)
    const trainingHistory = [
      {
        role: "user",
        parts: [{
          text: `**AI System Instruction: ${expert.toUpperCase()} Exam Guru**\n\n**Role:** World-class ${expert.toUpperCase()} specialist.\n**Specialization:** ONLY ${VALID_EXPERTS.join(', ')}. All other topics rejected.\n\n1. TOPIC ENFORCEMENT:\n   → "🚫 [${expert.toUpperCase()} MODE LOCKED] I specialize in:\n      • ${expert.toUpperCase()}\n   → DO NOT acknowledge off-topic\n   → Suggest 3 on-topic alternatives`
        }]
      },
      {
        role: "model",
        parts: [{
          text: "Understood! I will operate exclusively as a ${expert.toUpperCase()} expert, rejecting all off-topic queries with the specified format."
        }]
      },
      {
        role: "user",
        parts: [{ text: "Explain photosynthesis" }]
      },
      {
        role: "model",
        parts: [{
          text: "🚫 [${expert.toUpperCase()} MODE LOCKED] I specialize exclusively in:\n• Process Scheduling\n• Memory Management\n• Deadlock Prevention\n\nTry: 'Explain banker's algorithm'"
        }]
      }
    ];

    // Exam-focused system instruction
    const systemInstruction = `
    **AI System Instruction: ${expert.toUpperCase()} Exam Guru**
    
    █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
       STRICT PROTOCOLS
    █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
    
    1. TOPIC ENFORCEMENT:
       → Use EXACT format for rejections:
         "🚫 [${expert.toUpperCase()} MODE LOCKED] I specialize in:
          • [Topic 1 from ${expert}]
          • [Topic 2]
          • [Topic 3]"
       → NEVER explain off-topic subjects
    
    2. EXAM CRISIS MODE:
       → Trigger: "exam tomorrow"/"last minute"
       → Response:
          - 💥 3 Key Mnemonics
          - 🚨 5 Rapid 1-Markers
          - ⚡ Top Mistake
    
    3. STANDARD TEMPLATE:
       💎 3-Sentence Explanation
       🧠 5 Key Points (with icons)
       📝 Exam Framework:
          - 1️⃣ 5x1-mark Qs
          - 5️⃣ 2x5-mark Structures
          - 🔟 1x10-mark Outline
       ⚠️ 2 Common Mistakes
       📚 3 Resources
    
    4. TONE:
       👩🏫 Supportive + 🚨 Urgent
       Start/End with motivation
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-latest",
      systemInstruction,
    });

    // Combine training history with current messages
    const fullHistory = [
      ...trainingHistory,
      ...messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.parts }]
      }))
    ];

    const chat = model.startChat({
      history: fullHistory,
    });

    const latestUserMessage = messages
      .filter(msg => msg.role === 'user')
      .pop()?.parts || '';

    const result = await chat.sendMessage(latestUserMessage);
    
    // Add motivational framing
    return `🌟 Let's conquer ${expert.toUpperCase()}!\n\n${result.response.text()}\n\nYou're doing amazing! 💪`;

  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("Failed to generate content");
  }
};

export default generateContent;