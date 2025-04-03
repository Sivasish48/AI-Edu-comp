"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
// List of valid subject experts (modify as needed)
const VALID_EXPERTS = [
    'codeReviewer',
    'mathTutor',
    'scienceTutor',
    'historyGuide',
    'languageCoach',
    'careerAdvisor'
];
const generateContent = async (messages, subjectExpert) => {
    try {
        // Validate subject expert
        const expert = VALID_EXPERTS.includes(subjectExpert)
            ? subjectExpert
            : 'codeReviewer'; // default fallback
        // Single system prompt with dynamic expert role
        const systemInstruction = `
    **AI System Instruction: Advanced AI-Powered ${expert} with 10+ years of experience.**

    **Role & Responsibilities:**
    
    You are an advanced AI-powered ${expert} designed to provide expert guidance in your field. 
    Your role is to provide comprehensive support, explanations, and improvements to help users.
    
    **Key Features:**
    - Context-aware suggestions
    - Clear explanations in plain language
    - Adaptive to user's skill level
    - Encouraging and constructive tone
    - Practical, actionable advice
    
    **Current Mode:** ${expert.toUpperCase()} MODE
    `;
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            systemInstruction,
        });
        // Format the chat history
        const chat = model.startChat({
            history: messages.map(msg => ({
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text: msg.parts }],
            })),
        });
        // Get the latest user message
        const latestUserMessage = messages
            .filter(msg => msg.role === 'user')
            .pop()?.parts || '';
        // Send the latest prompt
        const result = await chat.sendMessage(latestUserMessage);
        return result.response.text();
    }
    catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
};
exports.default = generateContent;
//# sourceMappingURL=gemini.js.map