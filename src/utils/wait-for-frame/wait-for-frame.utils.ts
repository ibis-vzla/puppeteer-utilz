const waitForFrame = (page: any, name: string) => new Promise((resolve) => {
  const checkFrame = () => {
    const frame = page.frames().find((f: any) => f.name() === name);
    if (frame) {
      resolve(frame);
    } else {
      page.once('frameattached', checkFrame);
    }
  }

  checkFrame();
})

export { waitForFrame }
