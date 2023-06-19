import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const decompress = async () => {
  pipeline(
    createReadStream(new URL("./files/archive.gz", import.meta.url)),
    createGunzip(),
    createWriteStream(new URL("./files/fileToCompress.txt", import.meta.url)),
    (err) => {
      if (err) {
        console.error("Pipeline failed.", err);
      } else {
        console.log("Pipeline succeeded.");
      }
    }
  );
};

await decompress();
