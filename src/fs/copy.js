import { cp } from "fs/promises";

const copy = async () => {
  const filePath = new URL("./files", import.meta.url);
  try {
    await cp(filePath, new URL("./files_copy", import.meta.url), {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
