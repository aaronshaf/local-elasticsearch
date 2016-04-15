#!/usr/bin/env node

var cp = require('child_process')
var path = require('path')

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

  var nodeLocalAlreadySet = args.some(function (arg) {
    return arg.indexOf('node.local') > -1
  })
  if (!nodeLocalAlreadySet) {
    args.push('--node.local', 'true')
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
