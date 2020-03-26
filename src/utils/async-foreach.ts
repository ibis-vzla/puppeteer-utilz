export const asyncForeach = async (iterable: Array<any>, callback: any) => {
  for (let index = 0; index < iterable.length; ++index) {
    await callback(iterable[index]);
  }
};
