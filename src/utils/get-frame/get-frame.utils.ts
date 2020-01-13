// NOTE: page.frames() also returns nested frames

const getFrame = (page: any, name: string) => {
  const frames = page.frames();
  const frame = frames.find((frame: any) => frame.name() === name);

  if (frame === -1) {
    throw new Error(`Couldn't find frame by name ${name}`);
  }

  return frame;
}

export { getFrame };
