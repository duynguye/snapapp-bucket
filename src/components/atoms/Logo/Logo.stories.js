import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Logo from './Logo';

const stories = storiesOf('Logo', module);
stories.addDecorator(StoryRouter());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>)
stories.add('without animation', () => <Logo />);