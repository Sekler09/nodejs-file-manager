import path from "path";
import fs from "fs";
import { cwd } from "process";

const handleRm = (args) => {
  if (args.length !== 1) {
    console.log("Invalid input");
    return;
  }

  const filename = path.resolve(cwd(), args[0]);

  fs.unlink(filename, (err) => {
    if (err) {
      console.log("Operation failed");
      return;
    }
  });
};

export default handleRm;
