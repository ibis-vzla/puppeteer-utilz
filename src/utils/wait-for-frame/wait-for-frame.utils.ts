const waitForFrame = (page: any, name: string) => {
  let fulfill: any;

  const promise = new Promise(x => fulfill = x);
  checkFrame();
  return promise;

  function checkFrame() {
    const frame = page.frames().find((f: any) => f.name() === name);
    if (frame) {
      fulfill(frame);
    } else {
      page.once('frameattached', checkFrame);
    }
  }
}

export { waitForFrame }
