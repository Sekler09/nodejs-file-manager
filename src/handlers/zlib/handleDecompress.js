import { createBrotliDecompress } from "zlib";
import path from "path";
import fs from "fs";
import { cwd } from "process";

const handleDecompress = (args) => {
  if (args.length !== 2) {
    console.log("Invalid input");
    return;
  }

  const source = path.resolve(cwd(), args[0]);
  const destination = path.resolve(cwd(), args[1]);

  if (path.extname(source) !== ".gz") {
    console.log("Operation failed");
    return;
  }

  const gzip = createBrotliDecompress();
  const rs = fs.createReadStream(source);
  const ws = fs.createWriteStream(destination);

  rs.pipe(gzip).pipe(ws);
};

export default handleDecompress;
