const dotenv = require("dotenv");
dotenv.config();
const { OpenAI } = require("openai");

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your OpenAI key is stored in .env
});

// Summary Controller
exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `Summarize this: \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });

    if (response.choices[0].text) {
      return res.status(200).json(response.choices[0].text.trim());
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

// Paragraph Controller
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `Write a detailed paragraph about: \n${text}`,
      max_tokens: 500,
      temperature: 0.5,
    });

    if (response.choices[0].text) {
      return res.status(200).json(response.choices[0].text.trim());
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

// Chatbot Controller (Hinglish)
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `Answer the question in Hinglish which is a mix of hindi and english.\n
Me: 'How are you Bhai? Kaha hai aajkal?'\n
Bot: 'All good bro. Pune mein hu'\n
Me: ${text}`,
      max_tokens: 300,
      temperature: 0.7,
    });

    if (response.choices[0].text) {
      return res.status(200).json(response.choices[0].text.trim());
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

// JavaScript Converter Controller
exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo",
      prompt: `/* Convert these instructions into JavaScript code: \n${text}`,
      max_tokens: 400,
      temperature: 0.25,
    });

    if (response.choices[0].text) {
      return res.status(200).json(response.choices[0].text.trim());
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

// Sci-Fi Image Generation Controller
exports.scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    const response = await openai.images.create({
      prompt: `Generate a sci-fi image of ${text}`,
      n: 1,
      size: "512x512",
    });

    if (response.data[0].url) {
      return res.status(200).json({ imageUrl: response.data[0].url });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};