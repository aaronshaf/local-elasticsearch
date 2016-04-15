A Node.js wrapper of Elasticsearch useful for development or testing.

Sets `node.local=true` by default.

## Installation

```
npm install local-elasticsearch --save-dev
```

## Usage

In package.json:

```
"scripts": {
  "elasticsearch": "elasticsearch --path.data=my-elasticsearch-data"
}
```

From the command line:

```
node_modules/.bin/elasticsearch
```

From inside a Node.js application:

```javascript
var localElasticsearch = require('local-elasticsearch')
var myArguments = []
var child = localElasticsearch.launch(myArguments)
```

## Publishing new version

```
./prepublish.sh --version 1.5.2
git push && git push --tags
npm publish
```
