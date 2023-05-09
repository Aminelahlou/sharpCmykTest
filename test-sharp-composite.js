const sharp = require("sharp");
async function compositeFunc() {
  const labelInput = await sharp({
    text: {
      text: "random text",
      font: "Arial",
      width: 500,
      height: 400,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .tiff()
    .toBuffer();
  const modulatedImage = sharp("./input/test-sharp-input.tif")
    .pipelineColourspace("cmyk")
    .modulate({ hue: 0, saturation: 1, brightness: 1 })
    .composite([
      {
        input: labelInput,
        width: 500,
        height: 400,
        channels: 4,
        top: 0,
        left: 0,
      },
    ])
    .toColourspace("cmyk");

  const whiteImage = await sharp({
    create: {
      width: 15000,
      height: 15000,
      channels: 4,
      background: { r: 255, g: 255, b: 255 },
      limitInputPixels: false,
    },
  })
    .toColorspace("cmyk")
    .tiff()
    .toBuffer();

  await sharp(whiteImage)
    .pipelineColorspace("cmyk")
    .composite([
      {
        input: await modulatedImage.toBuffer().catch((err) => {
          console.log("file error 2: ", file);
          console.log(err);
        }),
        top: 0,
        left: 0,
      },
    ])
    .toColorspace("cmyk")
    .toFile("./output/test-sharp-composite-output.tif");
}
compositeFunc();
