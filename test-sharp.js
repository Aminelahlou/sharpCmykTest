const sharp = require("sharp");

const sharpInstance = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-output.tif");
