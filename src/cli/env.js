const parseEnv = () => {
  const keys = Object.keys(process.env).filter((key) => key.startsWith("RSS_"));

  let output = "";
  keys.forEach((key) => {
    output += `RSS_${key.slice("RSS_".length)}=${process.env[key]}; `;
  });

  console.log(output);
};

parseEnv();
