import supertest from "supertest";
import fs from "fs";
import path from "path";
import processImage from "../utilities/processImage";
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
      "<h1>Your File doesn't exist!! Make sure you included the right file</h1>"
    );
  });

  it("insures that the width and height are bigger than zero", async () => {
    const response = await request.get(
      "/image?fileName=encenadaport&width=0&height=-1"
    );
    expect(response.text).toEqual("<h1>Width and Height must be numbers!</h1>");
  });

  it("test the process image function", async () => {
    await processImage("fjord", 500, 500);

    expect(
      fs.existsSync(
        path.join(__dirname, `../../assets/thumb/fjord_500_500.jpg`)
      )
    );
  });

  it("test the /image endpoint whether it resizes the image successfully or NOT", async () => {
    await request.get("/image?fileName=palmtunnel&width=400&height=400");
    expect(
      fs.existsSync(
        path.join(__dirname, `../../assets/thumb/palmtunnel_400_400.jpg`)
      )
    );
  });
});
