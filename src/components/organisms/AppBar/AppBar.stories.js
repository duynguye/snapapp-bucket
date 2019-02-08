import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import AppBar from './AppBar';

const apps = [
    {
        exact: true,
        path: '/',
        title: 'Contests',
        prefix: 'fas',
        icon: 'poll'
    }, {
        exact: false,
        path: '/calendar',
        title: 'Calendar',
        prefix: 'fas',
        icon: 'calendar-alt'
    }, {
        exact: false,
        path: '/casestudies',
        title: 'Case Studies',
        prefix: 'fas',
        icon: 'suitcase'
    }, {
        exact: false,
        path: '/other',
        title: 'Awards',
        prefix: 'fas',
        icon: 'trophy'
    }
];

const stories = storiesOf('App Bar', module);
stories.addDecorator(withKnobs());
stories.addDecorator(StoryRouter());
stories.addDecorator(story => <div style={{ height: '100vh', display: 'inline-flex', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)' }}>{ story() }</div>);
stories.add('default', () => <AppBar apps={apps} />);

