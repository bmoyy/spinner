const spin = "|/-\\|/-\\|";


const spinner = () => {
let delay = 0;  
  for (const char of spin) {
    delay += 200;
    setTimeout(() => {
      process.stdout.write(`\r${char}`);
    }, delay);
  }
};

spinner();
