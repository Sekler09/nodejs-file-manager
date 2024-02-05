import path from "path";
import fs, { createReadStream, createWriteStream } from "fs";
import { cwd } from "process";

const handleMv = (args) => {
  if (args.length != 2) {
    console.log("Invalid input");
    return;
  }
  const source = path.resolve(cwd(), args[0]);
  const destinationDir = path.resolve(cwd(), args[1]);
  const destinationFile = path.resolve(destinationDir, path.basename(source));
  fs.access(source, (e) => {
    if (e) {
      console.log("Operation failed");
      return;
    }

    fs.access(destinationFile, (err) => {
      if (!err) {
        console.log("Operation failed");
        return;
      }

      fs.mkdir(destinationDir, (err) => {
        const rs = createReadStream(source);
        const ws = createWriteStream(destinationFile);

        rs.pipe(ws);

        rs.on("close", () => {
          fs.unlink(source, () => {});
        });
      });
    });
  });
};

export default handleMv;
