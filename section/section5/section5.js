const score = (n) => {
  if (n >= 80 && n <= 99) {
    return "合格";
  } else if (n >= 60 && n < 80) {
    return "追試";
  } else if (n >= 0 && n < 60) {
    return "不合格";
  } else if (n === undefined) {
    return "後日受験";
  } else {
    return "0以上100未満の数字を入れてください";
  }
};

module.exports = { score };
