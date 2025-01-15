# Canvas LTI Lite

This script provides a single place to dynamicly load various resources
into Total Seminars Canvas instance. The resources you would like to load
should be wrapped in a self executing function and set to load async.

## Example
```javascript
// Load important externally hosted script.
(function(document) {
  const script = document.createElement("script");
  script.srv = "https://cdn.example.com/1.2.3/script.min.js";
  script.async = true;
  document.head.appendChild(script);
})(document);
```

Ideally this code should be minified before including in the main script file.
