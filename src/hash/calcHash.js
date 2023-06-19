import { createHash } from "crypto";
import { readFile } from "fs/promises";

const calculateHash = async () => {
  const buff = await readFile(
    new URL("./files/fileToCalculateHashFor.txt", import.meta.url)
  );
  const hash = createHash("sha256").update(buff).digest("hex");
  console.log(hash);
};

await calculateHash();
