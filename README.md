![Library logo](logo.png)

![npm bundle size](https://img.shields.io/bundlephobia/minzip/puppeteer-utilz?label=minified%20size)
![NPM](https://img.shields.io/npm/l/puppeteer-utilz)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

`puppeteer-utilz` is a package with utility functions for [puppeteer](https://github.com/puppeteer/puppeteer) that provides a low and high abstraction tooling to standardize the way we build projects using puppeteer, making our code more **stable**, **clean**, and **efficient**.

If you have any use cases which you think can be modular enough, please check [contributing.md](./CONTRIBUTING.md) PRs are welcome!

## Getting started 🔧

`puppeteer-utilz` is hosted on [npm](https://www.npmjs.com/package/puppeteer-utilz), so you can install it with:

```npm install puppeteer-utilz --save```

And for the yarn fans:

```yarn add puppeteer-utilz --save```

## Roadmap 🗺

- Write documentation to all the utility functions
- Add tests to all the utility functions
- Add diagrams of examples

## Documentation

WIP, PRs welcome!

## Available functions ♦️

| name | description | documentation | tests |
| ---- | ----------- | ------------- | ----- |
| noop | `noop` operation | ❌ | ✔️ |
| delay | wait for `x` ms | ❌ | ❌ |
| click-in-sel | click on a element that matches the passed selector | ❌ | ❌ |
| type-in-sel-val | type on a element that matches the passed selector | ❌ | ❌ |

## WIP 🔨

- `find-el-by-content` 
- `get-frame`
- `launch-browser`
- `retry-operation`
- `set-download-path`
- `wait-for-navigation`
- `fill-form`
- `async-foreach`
- `assert-image-content`