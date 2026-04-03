const { spawn } = require("child_process");

console.log("Starting Drop Server...");

const child = spawn("node", ["server/dist/main.js"], {
  stdio: "inherit",
  env: {
    ...process.env,
    PORT: "3000",
    DROP_DATA: "/data"
  }
});

child.on("close", code => {
  console.log("Drop Server exited with code", code);
});