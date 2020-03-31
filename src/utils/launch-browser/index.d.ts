type Context = {
  browser: any;
  page: any;
};

type Dimensions = {
  width: number;
  height: number;
};

type Config = {
  headless?: boolean;
  args?: Array<string>;
  dimensions?: Dimensions;
  plugins?: Array<any>;
  loadConfig?: any;
};
