import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Header from './Header';
import GlobalMenu from '../GlobalMenu/GlobalMenu';
import LocalMenu from '../LocalMenu/LocalMenu';
import { faFileExcel } from '@fortawesome/pro-solid-svg-icons';

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

const stories = storiesOf('Header', module);
stories.addDecorator(StoryRouter());
stories.addDecorator(story => <div style={{  }}>{story()}</div>);
stories.add('default', () => (
    <React.Fragment>
        <Header />
    </React.Fragment>
));

stories.add('with Global and Local Menu', () => (
    <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ display: 'flex', height: '100%' }}>
            <GlobalMenu apps={apps} />
            <LocalMenu />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Header />
        </div>
    </div>
));
