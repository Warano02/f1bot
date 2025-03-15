const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

class PluginManager {
  constructor(directory) {
    this.directory = directory;
  }

  async getPluginFiles(dir) {
    const files = await fsp.readdir(dir);
    return files
      .filter(file => file.endsWith('.js'))
      .map(file => path.join(dir, file));
  }

  async executePlugin(globalContext, command) {
    try {
      const pluginFiles = await this.getPluginFiles(this.directory);

      for (const filePath of pluginFiles) {
        const plugins = require(filePath);

        if (Array.isArray(plugins)) {
          const matchedPlugin = plugins.find(plugin => plugin.command.includes(command));

          if (matchedPlugin) {
            console.log(`[CYPHER-X] Loading plugin: ${filePath}`);

            await matchedPlugin.operate(globalContext);

            delete require.cache[require.resolve(filePath)];
            console.log(`[CYPHER-X] Plugin unloaded: ${filePath}`);

            return true;
          }
        }
      }
    } catch (error) {
      console.error(`Error executing command: ${command}`, error);
    }

    return false;
  }
}

module.exports = PluginManager;