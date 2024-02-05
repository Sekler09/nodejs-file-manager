import path from "path";
import { chdir, cwd } from "process";

const handleCd = (args) => {
  try {
    if (args.length !== 1) {
      console.log("Invalid input");
      return;
    }

    const newDir = path.resolve(cwd(), args[0]);
    chdir(newDir);
  } catch {
    console.log("Operation failed");
  }
};

export default handleCd;
