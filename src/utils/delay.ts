export const delay = (milliseconds: number) => (
  new Promise((resolve: any) => setTimeout(resolve, milliseconds))
);
