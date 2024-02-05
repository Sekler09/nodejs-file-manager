import handleCompress from "./handleCompress.js";
import handleDecompress from "./handleDecompress.js";

const zlibHandler = (command, args) => {
  switch (command) {
    case "compress": {
      handleCompress(args);
      break;
    }
    case "decompress": {
      handleDecompress(args);
      break;
    }
    default:
      console.log("Invalid input");
  }
};

export default zlibHandler;
