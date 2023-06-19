import { createWriteStream } from "fs";

const write = async () => {
  const stream = createWriteStream(
    new URL("./files/fileToWrite.txt", import.meta.url)
  );
  process.stdin.pipe(stream);
};

await write();
