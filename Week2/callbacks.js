var count = 0;

const increaseCount = (callback) => {
  count++;
  console.log(count);
};

for (var i = 0; i < 5; i++) {
  increaseCount();
}
