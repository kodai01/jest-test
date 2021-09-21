const fetch = require("node-fetch");
const section9 = require("../section/section9/section9");
const customData = require("./customData.json");
const answer = require("./answer.json");
const { userIdList, fixData } = section9;

describe("test userIdList function", () => {
  test("case jsonplaceholder all data", async () => {
    const json = await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (res) => res.json()
    );
    expect(userIdList(json)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("case jsonplaceholder 11-20 data", async () => {
    const json = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=2"
    ).then((res) => res.json());
    expect(userIdList(json)).toEqual([2]);
  });
  test("case jsonplaceholder 67-78 data", async () => {
    const json = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_start=66&_limit=12"
    ).then((res) => res.json());
    expect(userIdList(json)).toEqual([7, 8]);
  });
  test("case custom data", () => {
    expect(userIdList(customData)).toEqual([1, 30000, 123456]);
  });
});

describe("test fixUser function", () => {
  test("case custom data", () => {
    expect(fixData(customData)).toEqual(answer);
  });
});
