import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Tab from './Tab';

const stories = storiesOf('Tab', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('standard', () => {
    let active = boolean('Active', true);

    return (
        <React.Fragment>
            <Tab count={87} active={active}>All</Tab>
            <Tab count={6} active={!active}>Recent</Tab>
            <Tab count={9}>Updated</Tab>
        </React.Fragment>
    );
});