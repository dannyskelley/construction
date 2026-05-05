#!/bin/bash
set -e

# Install any new npm dependencies introduced by the merged task.
# Eleventy's dev workflow rebuilds on file change, so no separate build step needed.
npm install --no-audit --no-fund --prefer-offline
