import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Example', module);
stories.addDecorator(withKnobs);

const Example = function(props={}){
  return (
    <div>I'm just an example</div>
  );
}

stories
  .add('Default', () => <Example />);
