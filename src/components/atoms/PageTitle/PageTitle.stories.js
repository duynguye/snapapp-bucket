import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs'; 
import PageTitle from './PageTitle';

const stories = storiesOf('Page Title', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem', backgroundColor: '#2a4494' }}>{ story() }</div>);
stories.add('standard', () => <PageTitle>{ text('Title', 'Contests') }</PageTitle>);
