# forEachHtmlNodes

## Get started

### Install
```
$ npm install @inc2734/for-each-html-nodes
```

### Example

```
import forEachHtmlNodes from '@inc2734/for-each-html-nodes';

const items = document.querySelectorAll('.c-item');
forEachHtmlNodes(items, (item, index) => {
  item.setAttribute('data-is-hidden', 'true');
});
```

## License
MIT
