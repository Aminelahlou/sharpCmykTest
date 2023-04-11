const sharp = require("sharp");

const sharpInstance = sharp("./input/test-sharp.tif")
  .withMetadata({
    profile: "*.icm",
  })
  .pipelineColourspace("cmyk")
  .toColourspace("cmyk")
  .toFile("./output/test-sharp.tif");
