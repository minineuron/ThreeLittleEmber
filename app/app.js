window.ThreeLittleEmber = Ember.Application.create();
require("loader");
// Default load order. Override as you see fit.
require("store");
require("libs/**/*");
require("modules/*/model");
require("modules/*/controller");
require("modules/*/view");
require("helpers/*");
require("router");
require("modules/*/route");

// Create fixtures
ThreeLittleEmber.IndexModel.FIXTURES = [
  {
    text: "Ember.js",
    url: "http://emberjs.com",
    id: 1
  },
  {
    text: "Ember Data",
    url: "https://github.com/emberjs/data",
    id: 2
  },
  {
    text: "grunt-neuter",
    url: "https://github.com/trek/grunt-neuter",
    id: 3
  },
  {
    text: "Yeoman",
    url: "http://yeoman.io",
    id: 4
  }
];


//threejs
// require("threeMain");