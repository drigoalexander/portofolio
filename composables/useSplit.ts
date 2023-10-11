export default (word: string) => {
  return word
    .split("")
    .map((words) => `<span>${words}</span>`)
    .join("");
};
