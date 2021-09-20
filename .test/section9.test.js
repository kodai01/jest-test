const fetch = require("node-fetch");
const section9 = require("../section/section9/section9");
const customData = require("../section/section9/cumtomData.json");
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
    const expected = [
      {
        userId: 1,
        datas: [
          { id: 1, title: "hello world", body: "first letter." },
          { id: 2, title: "Dear Mr. Mike", body: "second body." },
        ],
      },
      {
        userId: 30000,
        datas: [
          { id: 3, title: "Special News!!", body: "third." },
          { id: 7, title: "Happy new Year!!", body: "this is a comment." },
        ],
      },
      {
        userId: 123456,
        datas: [
          { id: 4, title: "Trick Or Treat", body: "forth." },
          { id: 5, title: "I'll invite you a party", body: "fifth message." },
          {
            id: 6,
            title: "I want a gift for you",
            body: "this is a example message.",
          },
        ],
      },
    ];
    expect(fixData(customData)).toEqual(expected);
  });
});
