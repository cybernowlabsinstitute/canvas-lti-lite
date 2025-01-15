// Google Tag Manager
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-WZWX4NXZ");

// Video.js for HLS support
(function (d) {
  const v = d.createElement("script");
  v.src = "https://vjs.zencdn.net/8.16.1/video.min.js";
  v.async = true;
  d.head.appendChild(v);
  const l = d.createElement("link");
  l.rel = "stylesheet";
  l.href = "https://vjs.zencdn.net/8.16.1/video-js.css";
  d.head.appendChild(l);
})(document);
