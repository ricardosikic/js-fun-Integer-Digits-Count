const count = (num) => {
  const numberToString = num.toString();
  const clearString = numberToString.match(/[^-]/gi);
  return clearString;
}

count(-654321);