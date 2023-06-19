import { createReadStream } from "fs";

const read = async () => {
  const stream = createReadStream(
    new URL("./files/fileToRead.txt", import.meta.url)
  );

  stream.pipe(process.stdout);
};

await read();
