const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const path = require('path');

module.exports = [
  {
    command: ['blackbox'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        let response = await fetch(`https://api.siputzx.my.id/api/ai/blackboxai?content=${encodeURIComponent(text)}`);
        let data = await response.json();

        if (response.status !== 200 || !data.status || !data.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(data.data);
        }
      } catch (error) {
        console.error('Error fetching response from BlackboxAI API:', error);
        reply("An error occurred while fetching the response from BlackboxAI API.");
      }
    }
  },
  {
    command: ['dalle'],
    desc: "Ask question to an AI",
    operate: async ({ Cypher, m, reply, text }) => {
      if (!text) return reply("*Please enter a query!*");

      const apiUrl = `https://api.siputzx.my.id/api/ai/stable-diffusion?prompt=${encodeURIComponent(text)}`;
      try {
        await Cypher.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
      } catch (error) {
        console.error('Error generating image:', error);
        reply("*An error occurred while generating the image.*");
      }
    }
  },
  {
    command: ['gemini'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        let response = await fetch(`https://bk9.fun/ai/gemini?q=${encodeURIComponent(text)}`);
        let data = await response.json();

        if (response.status !== 200 || !data.status || !data.BK9) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(data.BK9);
        }
      } catch (error) {
        console.error('Error fetching response from Gemini AI API:', error);
        reply("An error occurred while fetching the response from Gemini AI API.");
      }
    }
  },
  {
    command: ['generate'],
    desc: "",
    operate: async ({ Cypher, m, reply, text, prefix, command }) => {
      if (!text) return reply(`*Please provide a query to generate an image!*`);

      const api3Url = `https://api.gurusensei.workers.dev/dream?prompt=${encodeURIComponent(text)}`;
      try {
        await Cypher.sendMessage(m.chat, { image: { url: api3Url } }, { quoted: m });
      } catch (error) {
        console.error('Error generating image:', error);
        reply("*An error occurred while generating the image.*");
      }
    }
  },
  {
    command: ['dbrx'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/dbrx-instruct?content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from DBRX API:', error);
        reply("An error occurred while fetching the response from DBRX API.");
      }
    }
  },
  {
    command: ['deepseek'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-r1?content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from DeepSeek-R1 API:', error);
        reply("An error occurred while fetching the response from DeepSeek-R1 API.");
      }
    }
  },
  {
    command: ['deepseekllm'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat?content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from DeepSeek-LLM API:', error);
        reply("An error occurred while fetching the response from DeepSeek-LLM API.");
      }
    }
  },
  {
    command: ['doppleai'],
    desc: "Ask question to an AI",
    operate: async ({ reply, m, text }) => {
      async function fetchDoppleAIResponse(query) {
        const response = await axios.get(`https://xploader-api.vercel.app/doppleai?prompt=${encodeURIComponent(query)}`);
        return response.data;
      }

      try {
        if (!text) return reply('*Please ask a question*');
        const result = await fetchDoppleAIResponse(text);
        reply(result.response);
      } catch (error) {
        console.error('Error in DoppleAI plugin:', error);
        reply('An error occurred!');
      }
    }
  },
  {
    command: ['gpt'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/gpt3?prompt=you%20are%20an%20helpful%20assistant%20providing%20detailed%20and%20friendly%20responses&content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from GPT API:', error);
        reply("An error occurred while fetching the response from GPT API.");
      }
    }
  },
  {
    command: ['gpt2'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        let response = await fetch(`https://bk9.fun/ai/jeeves-chat?q=${encodeURIComponent(text)}`);
        let data = await response.json();

        if (!data.BK9) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(data.BK9);
        }
      } catch (error) {
        console.error('Error fetching response from GPT-2 API:', error);
        reply("An error occurred while fetching the response from GPT-2 API.");
      }
    }
  },
  {
    command: ['imagen'],
    desc: "Ask question to an AI",
    operate: async ({ Cypher, m, reply, text, prefix, command }) => {
      if (!text) return reply(`*Please provide a query to generate an image!*`);

      const api2Url = `https://bk9.fun/ai/magicstudio?prompt=${encodeURIComponent(text)}`;
      try {
        await Cypher.sendMessage(m.chat, { image: { url: api2Url } }, { quoted: m });
      } catch (error) {
        console.error('Error generating image:', error);
        reply("*An error occurred while generating the image.*");
      }
    }
  },
  {
    command: ['imagine'],
    desc: "Ask question to an AI",
    operate: async ({ Cypher, m, reply, text, prefix, command }) => {
      if (!text) return reply(`*Please provide a query to generate an image!*`);

      const apiUrl = `https://api.siputzx.my.id/api/ai/flux?prompt=${encodeURIComponent(text)}`;
      try {
        await Cypher.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
      } catch (error) {
        console.error('Error generating image:', error);
        reply("An error occurred while generating the image.");
      }
    }
  },
  {
    command: ['letterai'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please provide an input for the letter.*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/moshiai?input=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from LetterAI API:', error);
        reply("An error occurred while fetching the response from LetterAI API.");
      }
    }
  },
  {
    command: ['llama'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        let response = await fetch(`https://bk9.fun/ai/llama?q=${encodeURIComponent(text)}`);
        let data = await response.json();

        if (!data.BK9) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(data.BK9);
        }
      } catch (error) {
        console.error('Error fetching response from Llama API:', error);
        reply("An error occurred while fetching the response from Llama API.");
      }
    }
  },
  {
    command: ['metaai'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/meta-llama-33-70B-instruct-turbo?content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from MetaAI API:', error);
        reply("An error occurred while fetching the response from MetaAI API.");
      }
    }
  },
  {
    command: ['mistral'],
    desc: "Ask question to an AI",
    operate: async ({ m, reply, text }) => {
      if (!text) return reply("*Please ask a question*");

      try {
        const apiUrl = `https://api.siputzx.my.id/api/ai/mistral-7b-instruct-v0.2?content=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        if (!result.status || !result.data) {
          return reply("*Please try again later or try another command!*");
        } else {
          reply(result.data);
        }
      } catch (error) {
        console.error('Error fetching response from Mistral API:', error);
        reply("An error occurred while fetching the response from Mistral API.");
      }
    }
  },
  {
    command: ['photoai', "ptt"],
    desc: "Ask question to an AI",
    operate: async ({ Cypher, m, reply, text, prefix, command }) => {
      if (!text) return reply(`*Please provide a query to generate an image!*`);

      const apiUrl = `https://api.siputzx.my.id/api/ai/dreamshaper?prompt=${encodeURIComponent(text)}`;
      try {
        await Cypher.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
      } catch (error) {
        console.error('Error generating image:', error);
        reply("An error occurred while generating the image.");
      }
    }
  },
];