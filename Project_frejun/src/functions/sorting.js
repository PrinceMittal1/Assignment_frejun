function forsorting(value) {
  console.log(value);
  let newdata = value.sort(function (a, b) {
    return b.id - a.id;
  });
  return newdata;
}

export default forsorting;
