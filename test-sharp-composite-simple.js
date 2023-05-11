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
    .toColorspace("cmyk")
    .tiff()
    .toBuffer();
  const compositedImage = sharp("./input/test-sharp-input.tif")
    .pipelineColourspace("cmyk")
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
    .toColourspace("cmyk")
    .tiff();

  await compositedImage.toFile("./output/test-sharp-composite-simple.tif");
}
compositeFunc();
