function countingValleys(path) {
  let level = {};
  let level_value = 0;
  valleysCount = 0;
  Object.defineProperty(level, "value", {
    set(newValue) {
      if (newValue === 0 && level_value < 0) {
        ++valleysCount;
      }
      level_value = newValue;
    },
    get() {
      return level_value;
    },
  });
  for (const dir of path.split("")) {
    level.value = level.value + { U: 1, D: -1 }[dir];
  }
  return valleysCount;
}

console.log(countingValleys("UDDDUDUU"));
