const request = require("supertest")
const http = require('http')

const app = require("../app.js")

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3000, () => {
    console.log("Starting test server");
    done();
  });
});

afterAll((done) => {
  server.close((err) => {
    if (err) {
      console.error(err);
    }
    done();
  });
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
