const request = require("supertest");

const app = require("../app");

jest.useRealTimers();

describe("GET /students", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .get("/students")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ _id: expect.any(String) }),
            expect.objectContaining({ name: expect.any(String) }),
            expect.objectContaining({ courses: expect.any(Array) }),
          ])
        );
      });
  });
});

describe("POST /students", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .post("/students")
      .send({
        name: "Samson",
        courses: ["611ea3673b2756220c5a8df8"],
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("GET /students/:id", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .get("/students/611e4903ca8b4a09c08b7537")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
            courses: expect.any(Array),
          })
        );
      });
  });
});

describe("PUT /students:id", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .put("/students/611e4903ca8b4a09c08b7537")
      .send({
        name: "Samson",
        courses: ["611ea3673b2756220c5a8df8"],
      })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
