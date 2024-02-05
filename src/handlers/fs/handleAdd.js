import path from 'path';
import fs from 'fs';
import { cwd } from 'process';

const handleAdd = (args) => {
  if (args.length != 1) {
    console.log('Invalid input');
    return;
  }
  const filename = path.resolve(cwd(), args[0]);
  fs.access(filename, (err) => {
    if (!err) {
      console.log('Operation failed');
      return;
    }

    fs.writeFile(filename, '', (err) => {
      if (err) {
        console.log('Operation failed');
      }
    });
  });
};

export default handleAdd;
