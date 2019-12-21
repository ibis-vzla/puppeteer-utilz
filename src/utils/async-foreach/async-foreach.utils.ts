const asyncForEach = async (iterable: Array<any>, callback: any) => {
  for (let index = 0; index < iterable.length; index += 1) {
    await callback(iterable[index], index, iterable)
  }
}

export { asyncForEach };
