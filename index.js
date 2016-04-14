#!/usr/bin/env node

var cp = require('child_process')
var path = require('path')
var os = require('os')
var crypto = require('crypto')

if (require.main === module) {
  var child = launch(process.argv)
  child.stdout.pipe(process.stdout)
  child.stderr.pipe(process.stderr)
}

function launch (args) {
  if (!args) {
    args = []
  }
  args = args.slice(0)

  var cmd = path.join(__dirname, 'elasticsearch', 'bin', 'elasticsearch')

  // not needed >= Elasticsearch 2.0
  var networkHostAlreadySet = args.some(function (arg) {
    return arg.indexOf('network.host') > -1
  })
  if (!networkHostAlreadySet) {
    args.push('--network.host', '127.0.0.1')
  }

  var opts = {
    env: process.env,
    detached: false,
    stdio: 'pipe'
  }

  opts.cwd = process.cwd()

  return cp.spawn(cmd, args, opts)
}

exports.launch = launch
