const request = require("supertest");

const app = require("../app");

jest.useRealTimers();

describe("GET /courses", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .get("/courses")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ _id: expect.any(String) }),
            expect.objectContaining({ name: expect.any(String) }),
          ])
        );
      });
  });
});

describe("POST /courses", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .post("/courses")
      .send({ name: "testUser" })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("GET /courses/:id", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .get("/courses/611ea3673b2756220c5a8df8")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
          })
        );
      });
  });
});

describe("PUT /courses:id", function () {
  it("responds with json", function () {
    jest.setTimeout(10 * 1000);
    request(app)
      .put("/courses/611ea3673b2756220c5a8df8")
      .send({ name: "updatedTestUser" })
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
