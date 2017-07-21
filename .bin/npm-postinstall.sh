#!/bin/bash

# adds vendor assets from installed modules
echo "[ COPYING ] vendor resources"

publicJS="./.storybook/public/js"
mkdir -p "$publicJS"

cp -v "./node_modules/react/dist/react.js" "$publicJS"

echo -e "\n[ COPY ] complete"
