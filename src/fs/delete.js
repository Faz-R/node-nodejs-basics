import { rm } from "fs/promises";

const remove = async () => {
  const removeFile = new URL("./files/fileToRemove.txt", import.meta.url);

  try {
    await rm(removeFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
