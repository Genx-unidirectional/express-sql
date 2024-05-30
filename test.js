const os = require("os");
const allModules = require("module").builtinModules;

// console.log(allModules);
for (let i = 0; i < process.argv.length; i++) {
  //   console.log(process.argv[i] + "hello");
}

const systemInfo = {
  "Home Directory": os.homedir(),
  "Operating System": os.type(),
  "Last Reboot": os.uptime(),
};

for (let key of Object.keys(process.env)) {
  if (key === "NODE_ENV") {
    console.log(process.env[key]);
  }
}

// console.log(systemInfo);
