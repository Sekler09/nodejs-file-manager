import path from "path";
import fs, { createReadStream, createWriteStream } from "fs";
import { cwd } from "process";

const handleRn = (args) => {
  if (args.length != 2) {
    console.log("Invalid input");
    return;
  }
  const source = path.resolve(cwd(), args[0]);
  const destination = path.resolve(cwd(), args[1]);
  fs.access(source, (err) => {
    if (err) {
      console.log("Operation failed");
      return;
    }
    fs.access(destination, (err) => {
      if (!err) {
        console.log("Operation failed");
        return;
      }

      const ws = createWriteStream(destination);
      const rs = createReadStream(source);
      ws.on("open", () => {
        rs.pipe(ws);
      });
      fs.unlink(source, (err) => {
        if (err) {
          console.log("Operation failed");
        }
      });
    });
  });
};

export default handleRn;
