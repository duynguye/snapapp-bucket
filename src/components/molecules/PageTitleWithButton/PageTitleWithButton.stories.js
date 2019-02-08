import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs'; 
import PageTitleWithButton from './PageTitleWithButton';

const stories = storiesOf('Page Title with Button', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem', backgroundColor: '#2a4494' }}>{ story() }</div>);
stories.add('standard', () => <PageTitleWithButton>{ text('Title', 'Contests') }</PageTitleWithButton>);
