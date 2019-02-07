import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from './Logo';

const stories = storiesOf('Logo', module);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>)
stories.add('without animation', () => <Logo />);