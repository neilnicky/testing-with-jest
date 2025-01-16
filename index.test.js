// const sum = require("./index");

// test("adds 1 + 2 to equals 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

////////////////////////////////////////////////

// const myFunction = require("./index");

// test("throws on invalid input", () => {
//   expect(() => {
//     myFunction("3");
//   }).toThrow();
// });

////////////////////////////////////////////////

// const fetchData = require("./index");

// test("the data is peanut butter", done => {
//   function callback(data) {
//     try {
//       expect(data).toBe("peanut buttter");
//       done()
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData(callback);
// });

////////////////////////////////////////////////

// const fetchPromise = require("./index");

// test("the data is peanut butter", () => {
//   return expect(fetchPromise()).resolves.toBe("peanut butter");
// });

// test("the fetch fails with an error", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

// test("the data is peanut butter", async () => {
//   const data = await fetchPromise();
//   expect(data).toBe("peanut butter");
// });

////////////////////////////////////////////////

// test("mock implementation of a basic function", () => {
//   const mock = jest.fn((x) => 42 + x);
//   expect(mock(10)).toBe(52);
//   expect(mock).toHaveBeenCalledWith(10);
// });

////////////////////////////////////////////////

test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalledWith();
  spy.mockRestore();
});
