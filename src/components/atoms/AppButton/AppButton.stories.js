import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppButton from './AppButton';

const stories = storiesOf('App Button', module);
stories.addDecorator(withKnobs());
stories.addDecorator(StoryRouter());
stories.addDecorator(story => <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '3rem' }}>{ story() }</div>);
stories.add('default', () => (
    <React.Fragment>
        <AppButton exact path="/" title="Contests"><FontAwesomeIcon icon={['fas', 'poll']} /></AppButton>
        <AppButton path="/test" title="Case Studies"><FontAwesomeIcon icon={['fas', 'suitcase']} /></AppButton>
        <AppButton path="/new" title="Add New"><FontAwesomeIcon icon={['far', 'plus']} /></AppButton>    
    </React.Fragment>
));
stories.add('with text', () => <AppButton path="/">{ text('Title', 'App Link') }</AppButton>);
