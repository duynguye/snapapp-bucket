import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import GlobalMenu from '../GlobalMenu/GlobalMenu';
import LocalMenu from './LocalMenu';
import { ContextLink } from '../../atoms';

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

const stories = storiesOf('Local Menu', module);
stories.addDecorator(StoryRouter());
stories.addDecorator(story => <div style={{ height: '100vh', display: 'inline-flex', boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.2)' }}>{ story() }</div>);
stories.add('default', () => <LocalMenu />);
stories.add('with Global Menu', () => (
    <React.Fragment>
        <GlobalMenu apps={apps} />
        <LocalMenu>
            <ContextLink exact={true} path='/' icon={['fal', 'folder']}>My Workspace</ContextLink>
            <ContextLink exact={false} path='/projects' icon={['fal', 'rocket']}>Projects</ContextLink>
            <ContextLink exact={false} path='/proposals' icon={['fal', 'desktop']}>Proposals</ContextLink>
            <ContextLink exact={false} path='/contracts' icon={['fal', 'file-contract']}>Contracts</ContextLink>
            <ContextLink exact={false} path='/contests' icon={['fal', 'trophy']}>Contests</ContextLink>
            <ContextLink exact={false} path='/archives' icon={['fal', 'archive']}>Archives</ContextLink>
            <ContextLink exact={false} path='/domain' icon={['fal', 'atlas']}>Domain &amp; DNS</ContextLink>
            <ContextLink exact={false} path='/hosting' icon={['fal', 'server']}>Hosting</ContextLink>
            <ContextLink exact={false} path='/plugins' icon={['fal', 'plug']}>Plugins</ContextLink>
        </LocalMenu>
    </React.Fragment>
))