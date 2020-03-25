const delay = (ms: number): Promise<void> => new Promise((resolve: any) => setTimeout(resolve, ms));

export default delay;
