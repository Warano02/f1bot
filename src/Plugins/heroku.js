const updateHerokuVar = async ({ Cypher, m, reply, isCreator, key, value, setHerokuEnvVar }) => {
  if (!isCreator) return reply("❌ *Only the bot owner can modify this setting.*");
  try {
    await setHerokuEnvVar(key, value);
    reply(`✅ *${key.replace(/_/g, " ")} updated:*\n\`\`\`${key} = ${value.toUpperCase()}\`\`\``);
    reply("🔄 *Bot will restart to apply changes!*");
  } catch (error) {
    reply(`❌ *Error updating ${key.replace(/_/g, " ")}*\n${error.message}`);
  }
};

module.exports = [
  {
    command: ["addvar"],
    operate: async ({ Cypher, m, reply, isCreator, full_args, setHerokuEnvVar }) => {
      if (!isCreator) return;
      const [varName, varValue] = full_args.split("=").map(v => v.trim());
      if (!varName || !varValue) return reply(`*Provide a variable name and value*\n\nExample: .addvar NEW_VAR = value`);
      await updateHerokuVar({ Cypher, m, reply, isCreator, key: varName, value: varValue, setHerokuEnvVar });
    }
  },
  {
    command: ["delvar"],
    operate: async ({ Cypher, m, reply, isCreator, full_args, deleteHerokuEnvVar }) => {
      if (!isCreator) return;
      const varName = full_args.trim();
      if (!varName) return reply("*Provide a variable name to delete*");

      try {
        await deleteHerokuEnvVar(varName);
        reply(`✅ *Environment variable deleted:*\n\`\`\`${varName}\`\`\``);
        reply("🔄 *Bot will restart to apply changes!*");
      } catch (error) {
        reply(`❌ *Error deleting environment variable*\n${error.message}`);
      }
    }
  },
   {
    command: ['getvar', 'getvars'],
    operate: async (context) => {
        const { m, isCreator, reply, getHerokuEnvVars } = context;
        if (!isCreator) return;

        try {
            const envVars = await getHerokuEnvVars();
            const formattedVars = Object.entries(envVars)
                .map(([key, value]) => `${key} = ${value}`)
                .join('\n');
            await reply(`*Current Environment Variables:*\n\`\`\`${formattedVars}\`\`\``);
        } catch (error) {
            await reply(`*Error getting environment variables*\n${error.message}`);
        }
    }
},
  {
    command: ["setbotname"],
    operate: async ({ Cypher, m, reply, isCreator, text, setHerokuEnvVar }) => {
      if (!text) return reply("*Provide a bot name*\n\nExample: .setbotname CypherX");
      await updateHerokuVar({ Cypher, m, reply, isCreator, key: "BOT_NAME", value: text.trim(), setHerokuEnvVar });
    }
  },
    {
    command: ["setname"],
    operate: async ({ Cypher, m, reply, isCreator, text, setHerokuEnvVar }) => {
      if (!text) return reply("*Provide your name*\n\nExample: .setname Tylor");
      await updateHerokuVar({ Cypher, m, reply, isCreator, key: "OWNER_NAME", value: text.trim(), setHerokuEnvVar });
    }
  },
    {
    command: ["setownernumber"],
    operate: async ({ Cypher, m, reply, isCreator, text, setHerokuEnvVar }) => {
      if (!text) return reply("*Provide your name*\n\nExample: .setownernumber 1234567890");
      await updateHerokuVar({ Cypher, m, reply, isCreator, key: "OWNER_NUMBER", value: text.trim(), setHerokuEnvVar });
    }
  },
  {
    command: ['setvar'],
    operate: async (context) => {
        const { m, full_args, reply, isCreator, setHerokuEnvVar } = context;
        if (!isCreator) return;
        const [varName, varValue] = full_args.split('=');
        if (!varName || !varValue) {
            return reply(`*Please provide a variable name and value*\n\nExample: .setvar ANTI_CALL = false`);
        }
        try {
            const result = await setHerokuEnvVar(varName.trim(), varValue.trim());
            await reply(`*Environment variable set successfully*\n\`\`\`${varName} = ${varValue}\`\`\``);
            await reply(`*Bot will restart to apply the new environment variable. Please wait a moment!*`);
        } catch (error) {
            await reply(`*Error setting environment variable*\n${error.message}`);
        }
    }
},
];