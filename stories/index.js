import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import WoF from '../src/components/WoF';

const stories = storiesOf('Storybook Knobs', module);

stories.addDecorator(withKnobs);

stories
  .add('Default', () => <WoF />)
  .addWithInfo(
    '1st',
    "This is using the **info** add-on",
    () => <WoF items={[["Who's", "first"]]} />
  )
  .add('2nd', () => <WoF items={[array("Array of strings", ["What's", "second"])]} />)
  .add('3rd', () => <WoF items={[["I don't Know is", "third"]]} />);
