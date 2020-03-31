import {
  Frame,
  Page,
} from 'puppeteer';

// TODO: allow multiple `content` and `lookForIn` values

type Window = Page | Frame;
type Attribute = string;

const findElement = (window: Window, tagName: string, lookForIn: Attribute = 'textContent', content: string) => (
  new Promise(async (resolve, reject) => {
    const params = {
      tagName,
      content,
      lookForIn,
    };

    try {
      const el: any = await window.evaluateHandle((args: any) => {
        const [params] = args;
        var _tags = document.getElementsByTagName(params.tagName);
        var _response = null;

        for (let _i = 0; _i < _tags.length; _i += 1) {
          if (_tags[_i][params.lookForIn].includes(params.content)) {
            _response = _tags[_i];
          }
        }

        return _response;
      }, [params]);

      resolve(el);
    } catch (error) {
      reject(error);
    }
  })
);

export {
  findElement,
};
