'use strict';

export default function forEachHtmlNodes(htmlNodes, callback) {
  if (0 < htmlNodes.length) {
    let index = 0;
    [].forEach.call(htmlNodes, (htmlNode) => {
      callback(htmlNode, index);
      index ++;
    } );
  }
};
