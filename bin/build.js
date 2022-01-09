#!/usr/bin/env node
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { build } = require('estrella');
const { sync } = require('fast-glob');

const buildFiles = sync('src/**/*');
build({
  entryPoints: buildFiles,
  target: 'es2020',
  platform: 'node',
  tsconfig: './tsconfig.json',
  outdir: 'build',
  format: 'cjs',
  plugins: [nodeExternalsPlugin()],
});
