'use strict';

export default function forEachHtmlNodes(htmlNodes, callback) {
  if (0 < htmlNodes.length) {
    [].forEach.call(htmlNodes, (htmlNode) => callback(htmlNode));
  }
};
