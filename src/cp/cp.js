import { fork } from "node:child_process";

const spawnChildProcess = async (args) => {
  fork(new URL("files/script.js", import.meta.url), args);
};

spawnChildProcess([1, 2, 3]);
