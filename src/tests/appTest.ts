import supertest from "supertest";
import app from "../app";

const request = supertest(app);
describe("Test endpoint responses", () => {
  it("should open in the browser with status 200", async () => {
    const response = await request.get("/image");
    expect(response.status).toBe(200);
  });

  it("should through an error message if the image doesn't exist", async () => {
    const response = await request.get(
      "/image?fileName=anything&width=100&height=100"
    );
    expect(response.text).toEqual(
      "There was an error processing your image, Make sure that your image exists"
    );
  });

  it("resize the image (if the image exist)", async () => {
    const response = await request.get(
      "image?fileName=palmtunnel&width=400&height=400"
    );
    // expect(response)
  });
});
