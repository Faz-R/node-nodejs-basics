import { Transform } from "stream";

const transform = async () => {
  const StreamTransform = new Transform({
    transform(chunk, _, callback) {
      const dataReversed = chunk.toString().split("").reverse().join("");
      this.push(dataReversed + "\n");
      callback();
    },
  });

  process.stdin.pipe(StreamTransform).pipe(process.stdout);
};

await transform();
