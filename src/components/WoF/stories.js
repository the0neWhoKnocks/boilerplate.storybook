import { storiesOf } from '@storybook/react';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import WoF from './index';

const stories = storiesOf('WoF', module);
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
