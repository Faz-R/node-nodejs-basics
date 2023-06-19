const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = args.reduce((sum, elem, index, array) => {
    if (elem.startsWith("--")) {
      sum.push(`${elem.slice(2)} is ${array[index + 1]}`);
    }
    return sum;
  }, []);
  console.log(result.join(", "));
};

parseArgs();
