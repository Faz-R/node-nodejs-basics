import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
  pipeline(
    createReadStream(new URL("./files/fileToCompress.txt", import.meta.url)),
    createGzip(),
    createWriteStream(new URL("./files/archive.gz", import.meta.url)),
    (err) => {
      if (err) {
        console.error("Pipeline failed.", err);
      } else {
        console.log("Pipeline succeeded.");
      }
    }
  );
};

await compress();
