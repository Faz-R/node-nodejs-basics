import { rename as name } from "fs/promises";

const rename = async () => {
  const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPath = new URL("./files/properFilename.md", import.meta.url);

  try {
    await name(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
