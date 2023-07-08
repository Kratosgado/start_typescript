import { createInterface } from "readline";

const r1 = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function getInput(): Promise<string> {
  return new Promise((resolve) => {
    r1.question("Enter your name: ", (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  while (true) {
    const fname = await getInput();
    console.log(`Name given: ${fname}`);
    console.log("Closed");
  }
}

main().catch((error) => {
  console.error(error);
}).finally(() => {
  r1.close();
});
