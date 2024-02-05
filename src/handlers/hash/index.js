import { createReadStream } from "fs";
import { stdout, cwd } from "process";
import { createHash } from "crypto";
import os from "os";
import path from "path";

const handleHash = (args) => {
  if (args.length !== 1) {
    console.log("Invalid input");
    return;
  }

  const filename = path.resolve(cwd(), args[0]);

  const hash = createHash("sha256");
  const input = createReadStream(filename);

  input.pipe(hash).setEncoding("hex").pipe(stdout);
  input.on("error", () => console.log("Operation failed"));
  input.on("end", () => console.log(os.EOL));
};

export default handleHash;
