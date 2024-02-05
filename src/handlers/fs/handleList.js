import fs from "fs";
import { cwd } from "process";
import path from "path";

const handleList = async (args) => {
  if (args.length) {
    console.log("Invalid input");
    return;
  }

  fs.readdir(cwd(), (err, items) => {
    if (err) {
      console.log("Operation failed");
      return;
    }

    const entries = items.map((item) => {
      const fullPath = path.join(cwd(), item);

      return new Promise((resolve) => {
        fs.stat(fullPath, (err, stats) => {
          if (err) {
            console.log("Operation failed");
            resolve(null);
          } else {
            resolve({
              name: item,
              type: stats.isDirectory() ? "directory" : "file",
            });
          }
        });
      });
    });

    Promise.all(entries).then((result) => {
      const files = result.filter((entry) => entry && entry.type === "file");
      const folders = result.filter(
        (entry) => entry && entry.type === "directory"
      );

      folders.sort((a, b) => a.name.localeCompare(b.name));
      files.sort((a, b) => a.name.localeCompare(b.name));

      console.table([...folders, ...files], ["name", "type"]);
    });
  });
};

export default handleList;
