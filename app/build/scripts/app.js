!function e(r,o,n){function t(a,u){if(!o[a]){if(!r[a]){var p="function"==typeof require&&require;if(!u&&p)return p(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var l=o[a]={exports:{}};r[a][0].call(l.exports,function(e){var o=r[a][1][e];return t(o?o:e)},l,l.exports,e,r,o,n)}return o[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)t(n[a]);return t}({1:[function(e,r,o){"use strict";var n={lat:55.784366,lng:37.672338},t=new google.maps.Map(document.getElementById("google_map"),{center:n,scrollwheel:!1,zoom:17});new google.maps.Marker({map:t,icon:"http://127.0.0.1:3000/app/frontend/template/google-marker.png",position:n})},{}]},{},[1]);
//# sourceMappingURL=app.js.map