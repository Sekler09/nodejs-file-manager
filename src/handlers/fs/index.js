import handleAdd from "./handleAdd.js";
import handleCat from "./handleCat.js";
import handleCd from "./handleCd.js";
import handleCp from "./handleCp.js";
import handleList from "./handleList.js";
import handleMv from "./handleMv.js";
import handleRm from "./handleRm.js";
import handleRn from "./handleRn.js";
import handleUp from "./handleUp.js";

const fsHandler = (command, args) => {
  switch (command) {
    case "up": {
      handleUp(args);
      break;
    }
    case "cd": {
      handleCd(args);
      break;
    }
    case "ls": {
      handleList(args);
      break;
    }
    case "cat": {
      handleCat(args);
      break;
    }
    case "add": {
      handleAdd(args);
      break;
    }
    case "rn": {
      handleRn(args);
      break;
    }
    case "cp": {
      handleCp(args);
      break;
    }
    case "mv": {
      handleMv(args);
      break;
    }
    case "rm": {
      handleRm(args);
      break;
    }
    default:
      console.log("Invalid input");
  }
};

export default fsHandler;
