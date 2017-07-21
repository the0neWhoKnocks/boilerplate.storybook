import { storiesOf } from '@storybook/react';
import { withKnobs, array, text, boolean, number } from '@storybook/addon-knobs';
import Logger from './index';

const stories = storiesOf('Logger', module);
stories.addDecorator(withKnobs);

stories
  .add('All', () => {
    return (
      <div>
        <Logger message="I'm a log" />
        <Logger message="I'm a warning" type="warn" />
        <Logger message="I'm an error" type="error" />
        <Logger message="I'm info" type="info" />
      </div>
    )
  })
  .add('Log', () => <Logger message="I'm a log" />)
  .add('Warning', () => <Logger message="I'm a warning" type="warn" />)
  .add('Error', () => <Logger message="I'm an error" type="error" />)
  .add('Info', () => <Logger message="I'm info" type="info" />);