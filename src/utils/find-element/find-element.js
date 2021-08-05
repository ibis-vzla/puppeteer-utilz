// TODO: allow multiple `content` and `lookForIn` values

export const findElement = async (
  window,
  tagName,
  lookForIn = "textContent",
  content
) => {
  const params = {
    tagName,
    content,
    lookForIn,
  };

  try {
    const el = await window.evaluateHandle((args) => {
      const params = JSON.parse(args);

      var _tags = document.getElementsByTagName(params.tagName);
      var _response = null;

      for (let _i = 0; _i < _tags.length; _i += 1) {
        if (_tags[_i][params.lookForIn].includes(params.content)) {
          _response = _tags[_i];
        }
      }

      return _response;
    }, JSON.stringify(params));

    return el;
  } catch (error) {
    return error;
  }
};
