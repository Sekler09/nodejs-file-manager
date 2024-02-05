import { createBrotliCompress } from "zlib";
import path from "path";
import fs from "fs";
import { cwd } from "process";

const handleCompress = (args) => {
  if (args.length !== 2) {
    console.log("Invalid input");
    return;
  }

  const source = path.resolve(cwd(), args[0]);
  const destination = path.resolve(cwd(), args[1]);

  if(path.extname(destination) !== '.gz'){
    console.log("Operation failed");
    return;
  }

  const gzip = createBrotliCompress();
  const rs = fs.createReadStream(source);
  const ws = fs.createWriteStream(destination);

  rs.pipe(gzip).pipe(ws);
};

export default handleCompress;
