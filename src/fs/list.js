import { readdir } from "fs/promises";

const list = async () => {
  try {
    const listPath = new URL("./files", import.meta.url);
    const files = await readdir(listPath);
    for (const file of files) console.log(file);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
