import * as jsonfile from 'jsonfile';
import path from 'path'

const filePath = path.join(path.dirname(__filename), 'data.json');

async function readAndWriteJson() {
  try {
    // Write JSON data to file
    const data = { name: 'John', age: 30 };
    await jsonfile.writeFile(filePath, data);

    // Read JSON data from file
    const jsonData = await jsonfile.readFile(filePath);
    console.log(jsonData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

readAndWriteJson();
