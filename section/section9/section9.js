const userIdList = (jsonDatas) => {
  let returnUserId = [];

  const allUserIds = jsonDatas.map((jsonData) => {
    return jsonData.userId;
  });

  for (userId of allUserIds) {
    const getUserId = returnUserId.findIndex((eachReturnUserId) => {
      return eachReturnUserId === userId;
    });

    if (getUserId === -1) {
      returnUserId.push(userId);
    }
  }

  return returnUserId;
};

module.exports = { userIdList };
