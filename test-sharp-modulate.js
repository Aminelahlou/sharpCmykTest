const sharp = require("sharp");

const sharpInstance = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .modulate({ hue: 0, saturation: 1, brightness: 1 })
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-modulate-output.tif");

const sharpInstance2 = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .modulate({ hue: 10, saturation: 1, brightness: 1 })
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-modulate_hue-output.tif");

const sharpInstance3 = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .modulate({ hue: 0, saturation: 1.2, brightness: 1 })
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-modulate_saturation-output.tif");

const sharpInstance4 = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .modulate({ hue: 0, saturation: 1, brightness: 1.2 })
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-modulate_brightness-output.tif");

const sharpInstance5 = sharp("./input/test-sharp-input.tif")
  .pipelineColourspace("cmyk")
  .modulate({ hue: 360, saturation: 1, brightness: 1 })
  .toColourspace("cmyk")
  .toFile("./output/test-sharp-modulate_hue_identity-output.tif");
