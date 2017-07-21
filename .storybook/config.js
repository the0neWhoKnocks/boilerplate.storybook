/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

function requireAll(requireContext){
  return requireContext.keys().map(requireContext);
}

function loadStories(){
  require('../stories');
  requireAll( require.context("../src/components", true, /^(?!.*(?:node_modules)).*stories\.js$/) );
}

configure(loadStories, module);
