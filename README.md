# Canvas LTI Lite

This script provides a single place to dynamically load various resources
into Total Seminars Canvas instance. The resources you would like to load
should be wrapped in a self executing function and set to load async.

## Theory of operation
The `canvas` directory contains the `loader.js` file which is manually uploaded
to Canvas and dynamically loads the `script.js` file hosted in the root directory.

This `script.js` file then does the work of aysnc loading all the remaining assets.
Below is an example loading function that goes into `script.js`

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

_Ideally this code should be minified before including in the main script file._
