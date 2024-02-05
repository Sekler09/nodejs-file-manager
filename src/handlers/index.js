import fsHandler from "./fs/index.js";
import handleHash from "./hash/index.js";
import osHandler from "./os/index.js";
import { cwd } from "process";
import zlibHandler from "./zlib/index.js";

const handler = (line, readLineInterface) => {
  const [command, ...args] = line.split(" ");

  try {
    switch (command) {
      case ".exit": {
        readLineInterface.close();
        return;
      }
      case "os": {
        osHandler(args);
        break;
      }
      case "up":
      case "cd":
      case "cat":
      case "add":
      case "rn":
      case "cp":
      case "mv":
      case "rm":
      case "ls": {
        fsHandler(command, args);
        break;
      }
      case "hash": {
        handleHash(args);
        break;
      }
      case "compress":
      case "decompress": {
        zlibHandler(command, args);
        break;
      }
      default:
        console.log("Invalid input");
    }
    console.log(`You are currently in ${cwd()}`);
  } catch (e) {
    console.log(e);
  }
};

export default handler;
