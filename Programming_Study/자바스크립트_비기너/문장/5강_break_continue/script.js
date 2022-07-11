var k = 0, m = 0;
while (k < 3) {
  m++;
  if (m === 2) {
    break;
  };
  log(m);
};
// 1

for (var k = 0; k < 3; k++) {
  if (k === 1) {
    break
    log('k === 1');
  };
  log(k);
};
// 0

for (var k = 0; k < 5; k++) {
  if (k === 2 || k === 3) {
    continue;
  };
  log(k);
};
// 0
// 1
// 4