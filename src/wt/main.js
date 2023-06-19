import { Worker } from "worker_threads";
import { cpus } from "os";

const performCalculations = async () => {
  const core = cpus();
  let num = 10;

  const workers = await Promise.allSettled(
    core.map(
      () =>
        new Promise((resolve, reject) => {
          const worker = new Worker(new URL("./worker.js", import.meta.url), {
            workerData: num++,
          });
          worker.on("message", resolve);
          worker.on("error", reject);
        })
    )
  );

  const answer = workers.map(({ status, value }) => ({
    status: status === "fulfilled" ? "resolved" : "error",
    data: status === "fulfilled" ? value : null,
  }));

  console.log(answer);
  return answer;
};

await performCalculations();
