const echoDiv = (x, y) => {
  const reminder = x % y;
  const quotient = (x - reminder) / y;
  const message = "商: " + quotient + ", 余り: " + reminder;
  return message;
};

const reply = (message = "返信なし") => {
  return message;
};

module.exports = { echoDiv, reply };
