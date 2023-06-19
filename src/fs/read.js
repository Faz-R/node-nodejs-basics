import { readFile } from "fs/promises";

const read = async () => {
  try {
    const filePath = new URL("files/fileToRead.txt", import.meta.url);
    const contents = await readFile(filePath, { encoding: "utf8" });
    console.log(contents);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
