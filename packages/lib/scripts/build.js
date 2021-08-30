/* eslint-disable */
const { execSync } = require('child_process');
const { resolve } = require('path');

const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: resolve(__dirname, '..') });

// Clean the repo first
run('yarn run clean');

// Generate type definitions
run('yarn run tsc -p tsconfig.build.json');

// Run webpack build to generate JS/styles
run('yarn run webpack --config webpack.config.js');
