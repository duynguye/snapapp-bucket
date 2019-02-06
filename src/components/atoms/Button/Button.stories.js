import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('with text', () => <Button onClick={ action('Clicked!') } disabled={boolean('Disabled', false)}>{ text('Label', 'Hello World!') }</Button>);
stories.add('without text', () => <Button></Button>);