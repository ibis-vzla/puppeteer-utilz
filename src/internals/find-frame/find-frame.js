export const findFrame = (frames, name) =>
  frames.find((frame) => frame.name() === name);
