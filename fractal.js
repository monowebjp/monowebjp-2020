'use strict';

const consolidate = require('@frctl/consolidate');
const path = require('path');

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();
const ejsAdapter = consolidate('ejs');

/* Set the title of the project */
fractal.set('project.title', 'monoweb.jp');

/* File extentions */
fractal.components.engine(ejsAdapter);
fractal.components.set('ext', '.ejs');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/objects');
// fractal.web.set('builder.dest', __dirname + '/build');
/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

/* Specify a directory of static assets */
fractal.web.set('static.path', __dirname + '/dist');

/* Set the static HTML build destination */
