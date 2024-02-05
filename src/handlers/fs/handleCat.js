import path from "path";
import { stdout, cwd } from "process";
import { createReadStream } from "fs";
import os from "os";

const handleCat = (args) => {
  if (args.length != 1) {
    console.log("Invalid input");
    return;
  }

  const filename = path.resolve(cwd(), args[0]);
  const rs = createReadStream(filename);
  rs.on("error", () => console.log("Operation failed"));
  rs.on("end", () => console.log(os.EOL));
  rs.pipe(stdout);
};

export default handleCat;
