#!/usr/bin/env bash

# usage: ./ja_tree.sh <depth>
DEPTH=${1:-2}

find . -maxdepth "$DEPTH" -print | \
  sed -e 's/[^-][^\/]*\//|   /g' \
      -e 's/|   \([^|]\)/|-- \1/'

