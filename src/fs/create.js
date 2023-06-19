import { writeFile } from "fs/promises";

const create = async () => {
  const filePath = new URL("./files/fresh.txt", import.meta.url);

  try {
    await writeFile(filePath, "I am fresh and young", { flag: "ax" }, (err) => {
      if (err) throw err;
      console.log("File created successfully.");
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
