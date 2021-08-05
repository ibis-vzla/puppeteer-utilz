import { findFrame } from "../../internals";

export const getFrame = (page, name) => {
  const frame = findFrame(page.frames(), name);

  if (!frame) {
    return null;
  }

  return frame;
};

export { getFrame as refreshFrame };
