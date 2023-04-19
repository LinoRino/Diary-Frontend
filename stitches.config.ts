import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: "Roboto",
    },
  },
});

export const globalStyle = globalCss({});
