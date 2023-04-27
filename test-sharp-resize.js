const sharp = require("sharp");

const sharpInstance = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .resize(300, 300)
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-resize-output.tif");
