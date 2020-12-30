function jumpingOnClouds(c) {
  let cursor = 0;
  let jumpCount = 0;
  while (cursor !== c.length - 1) {
    cursor += c[cursor + 2] !== 1 && cursor + 2 < c.length ? 2 : 1;
    ++jumpCount;
  }
  return jumpCount;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
