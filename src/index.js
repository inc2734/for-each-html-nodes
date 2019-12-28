'use strict';

export default function(htmlNodes, callback) {
  if (0 < htmlNodes.length) {
    Array.prototype.slice.call(htmlNodes, 0).forEach((node, index) => {
      callback(node, index);
    });
  }
}
