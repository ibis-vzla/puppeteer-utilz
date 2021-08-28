import { onElement, onElementWithRetries } from "./on-element";
import { onSelector, onSelectorWithRetries } from "./on-selector";

export const click = async (options) => {
  const { component, selector, retries } = options;

  if (typeof component.asElement === "function") {
    if (retries) {
      return await onElementWithRetries(component, retries);
    } else {
      return await onElement(component);
    }
  } else {
    if (retries) {
      return await onSelectorWithRetries(component, selector, retries);
    } else {
      return await onSelector(component, selector);
    }
  }
};
