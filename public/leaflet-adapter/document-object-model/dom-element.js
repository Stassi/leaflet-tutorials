import { DomUtility } from './dom-utility.js';

export function domElement({
  name,
  style,
}) {
  const element = DomUtility.create(name);

  Object.assign(
    element.style,
    style,
  );

  return {
    appendChild(node) {
      element.appendChild(node);
      return node;
    },
    element,
    setInnerHtml(innerHtml) {
      element.innerHTML = innerHtml;
      return innerHtml;
    },
  };
}
