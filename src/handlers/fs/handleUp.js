import path from "path";
import { chdir, cwd } from "process";

const handleUp = (args) => {
  try {
    if (args.length) {
      console.log("Invalid input");
      return;
    }

    if (cwd() === path.parse(cwd()).root) {
      return;
    }
    const newDir = path.resolve(cwd(), "..");
    chdir(newDir);
  } catch {
    console.log("Operation failed");
  }
};

export default handleUp;
