import { createInterface } from "readline";
import { stdin, stdout, argv, chdir, cwd } from "process";
import { homedir } from "os";
import handler from "./handlers/index.js";

chdir(homedir());

const username = argv[2]?.replace("--username=", "") || "Anonymous";

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${cwd()}`);

const rl = createInterface({
  input: stdin,
  output: stdout,
});

rl.on("line", (line) => handler(line, rl));
rl.on("close", () =>
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
);
